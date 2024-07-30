import React from "react";
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.container} container`}>
                <div className={styles.copy}>© Кондитерские изделия«Кристалл», 2000–2024</div>
                <a href="#" className={styles.policy}>Политика конфиденциальности</a>
                <a href="tel:+7 (8412) 709-900" className={styles.tel}>+7 (8412) 709-900</a>
            </div>
        </footer>
    );
}

export default Footer;