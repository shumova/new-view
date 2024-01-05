import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/breadcrumps/breadcrumbs';
import Promo from '../../components/promo/promo';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogSort from '../../components/catalog-sort/catalog-sort';
import Pagination from '../../components/pagination/pagination';
import ProductCard from '../../components/product-card/product-card';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { useEffect, useRef, useState } from 'react';
import { MaxElementCount, SearchParam, Status } from '../../consts/enums';
import Spinner from '../../components/spinner/spinner';
import ErrorScreen from '../error-screen/error-screen';
import PreviewModal from '../../components/preview-modal/preview-modal';
import { useSearchParams } from 'react-router-dom';
import {
  getCameras,
  getPromo,
  selectCameras,
  selectCamerasStatus,
  selectPromo,
  selectPromoStatus
} from '../../store/catalog-slice/catalog-slice';
import { checkStatus } from '../../utiils/common';

function CatalogScreen() {
  const dispatch = useAppDispatch();
  const camerasStatus = useAppSelector(selectCamerasStatus);
  const promoStatus = useAppSelector(selectPromoStatus);
  const cameras = useAppSelector(selectCameras);
  const promo = useAppSelector(selectPromo);

  const [searchParams] = useSearchParams();
  const { isLoading, isError } = checkStatus({ status: { camerasStatus, promoStatus } });
  const [bannerPosition, setBannerPosition] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (camerasStatus === Status.Idle || promoStatus === Status.Idle) {
      dispatch(getCameras(1));
      dispatch(getPromo());
    }
  }, [camerasStatus, dispatch, promoStatus]);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  if (isLoading) {
    return <Spinner isActive/>;
  }

  if (isError || !promo) {
    return <ErrorScreen variant="error"/>;
  }

  const currentPage = Number(searchParams.get(SearchParam.Page)) || 1;
  const promoDescription = cameras.find((item) => item.id === promo.id)?.description;
  const sliceStart = (currentPage - 1) * MaxElementCount.ProductCard;
  const sliceEnd = sliceStart + MaxElementCount.ProductCard;
  const slicedCameras = cameras.slice(sliceStart, sliceEnd);

  return (
    <main>
      <Helmet>
        <title>Каталог - Фотошоп</title>
      </Helmet>
      <Promo
        setBannerPosition={setBannerPosition}
        promo={promo}
        description={promoDescription}
      />
      <div className="page-content">
        <Breadcrumbs/>
        <section ref={ref} className="catalog">
          <div className="container">
            <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
            <div className="page-content__columns">
              <CatalogFilter/>
              <div className="catalog__content">
                <CatalogSort/>
                <div className="cards catalog__cards">
                  {slicedCameras
                    .map((camera) => (
                      <ProductCard
                        key={camera.id}
                        camera={camera}
                      />))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  bannerPosition={bannerPosition}
                  camerasCount={cameras.length}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <PreviewModal contentRef={ref}/>
    </main>
  );
}

export default CatalogScreen;
