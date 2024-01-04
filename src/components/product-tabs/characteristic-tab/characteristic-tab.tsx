import { useAppSelector } from '../../../hooks/store-hooks';
import { selectProduct } from '../../../store/product-slice/product-slice';

function CharacteristicTab() {
  const product = useAppSelector(selectProduct);

  if (!product) {
    return null;
  }

  return (
    <div className="tabs__element is-active">
      <ul className="product__tabs-list">
        <li className="item-list"><span className="item-list__title">Артикул:</span>
          <p className="item-list__text">{product.vendorCode}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Категория:</span>
          <p className="item-list__text">{product.category}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Тип камеры:</span>
          <p className="item-list__text">{product.type}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Уровень:</span>
          <p className="item-list__text">{product.level}</p>
        </li>
      </ul>
    </div>
  );
}

export default CharacteristicTab;