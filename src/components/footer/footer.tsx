import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts/enums';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <a className="footer__logo" href="#todo" aria-label="Переход на главную">
            <svg width="100" height="36" aria-hidden="true">
              <use xlinkHref="#icon-logo-mono"></use>
            </svg>
          </a>
          <p className="footer__description">Интернет-магазин фото- и видеотехники</p>
          <ul className="social">
            <li className="social__item">
              <a className="link" href="#todo" aria-label="Переход на страницу вконтатке">
                <svg width="20" height="20" aria-hidden="true">
                  <use xlinkHref="#icon-vk"></use>
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a className="link" href="#todo" aria-label="Переход на страницу pinterest">
                <svg width="20" height="20" aria-hidden="true">
                  <use xlinkHref="#icon-pinterest"></use>
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a className="link" href="#todo" aria-label="Переход на страницу reddit">
                <svg width="20" height="20" aria-hidden="true">
                  <use xlinkHref="#icon-reddit"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <ul className="footer__nav">
          <li className="footer__nav-item">
            <p className="footer__title">Навигация</p>
            <ul className="footer__list">
              <li className="footer__item">
                <Link className="link" to={AppRoute.Catalog}>
                  Каталог
                </Link>
              </li>
              <li className="footer__item">
                <a className="link" href="#todo">Гарантии
                </a>
              </li>
              <li className="footer__item">
                <a className="link" href="#todo">Доставка
                </a>
              </li>
              <li className="footer__item">
                <a className="link" href="#todo">О компании
                </a>
              </li>
            </ul>
          </li>
          <li className="footer__nav-item">
            <p className="footer__title">Ресурсы</p>
            <ul className="footer__list">
              <li className="footer__item">
                <a className="link" href="#todo">Курсы операторов
                </a>
              </li>
              <li className="footer__item">
                <a className="link" href="#todo">Блог
                </a>
              </li>
              <li className="footer__item">
                <a className="link" href="#todo">Сообщество
                </a>
              </li>
            </ul>
          </li>
          <li className="footer__nav-item">
            <p className="footer__title">Поддержка</p>
            <ul className="footer__list">
              <li className="footer__item">
                <a className="link" href="#todo">FAQ
                </a>
              </li>
              <li className="footer__item">
                <a className="link" href="#todo">Задать вопрос
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
