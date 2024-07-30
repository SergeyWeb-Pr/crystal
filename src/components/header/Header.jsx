import styles from './header.module.scss'
import logoImg from './../../assets/img/logo/logo.png';
import userImg from './../../assets/img/icons/user.svg';
import menuBurgerImg from './../../assets/img/icons/menu-burger.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.header__container} container`}>
                <div className={styles.header__logo}>
                    <img src={logoImg} alt="" />
                </div>
                <button className={`${styles.header__catalog} btn-reset button1`}>
                    <img src={menuBurgerImg} alt="" />
                    <span>Каталог</span>
                </button>
                <button className={`${styles.header__cabinet} btn-reset button2`}>
                    <img src={userImg} alt="" />
                    <span>Личный кабинет</span>
                </button>

            </div>
        </header>
    );
}

export default Header;