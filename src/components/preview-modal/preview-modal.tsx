import { formatPrice } from '../../utiils/formaters';
import { useOutletContext } from 'react-router-dom';
import { OutletContext } from '../../types/app';
import Modal from '../modal/modal';


function PreviewModal() {
  const { preview, handlePreviewModalShow } = useOutletContext<OutletContext>();

  if (!preview) {
    return null;
  }

  return (
    <Modal onClickOutside={() => handlePreviewModalShow(null)}>
      <p className="title title--h4">Добавить товар в корзину</p>
      <div className="basket-item basket-item--short">
        <div className="basket-item__img">
          <picture>
            <source
              type="image/webp"
              srcSet={`${preview.previewImgWebp}, ${preview.previewImgWebp2x} 2x`}
            />
            <img
              src={preview.previewImg}
              srcSet={`${preview.previewImg2x} 2x`}
              width="140"
              height="120"
              alt={preview.name}
            />
          </picture>
        </div>
        <div className="basket-item__description">
          <p className="basket-item__title">{preview.name}</p>
          <ul className="basket-item__list">
            <li className="basket-item__list-item">
              <span className="basket-item__article">Артикул: </span>
              <span className="basket-item__number">
                {preview.vendorCode}
              </span>
            </li>
            <li className="basket-item__list-item">{preview.type} фотокамера</li>
            <li className="basket-item__list-item">{preview.level} уровень</li>
          </ul>
          <p className="basket-item__price">
            <span className="visually-hidden">Цена:</span>
            {formatPrice(preview.price)} ₽
          </p>
        </div>
      </div>
      <div className="modal__buttons">
        <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button">
          <svg width="24" height="16" aria-hidden="true">
            <use xlinkHref="#icon-add-basket"></use>
          </svg>
          Добавить в корзину
        </button>
      </div>
      <button
        onClick={() => handlePreviewModalShow(null)}
        className="cross-btn"
        type="button"
        aria-label="Закрыть попап"
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </Modal>
  );
}

export default PreviewModal;
