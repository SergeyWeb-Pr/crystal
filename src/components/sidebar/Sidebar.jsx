import React from 'react';
import styles from './sidebar.module.scss'

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const categories = ['Все', 'Торты', 'Пирожные', 'Пирожки, хот-доги, пончики', 'Пастильно-мармеладные', 'Печенье']

    const onClickCategory = (index) => {
        setActiveIndex(index);
    }

    return (
        <div className={styles.sidebar}>
            <div className={`${styles.title} block-title`}>
                Меню
            </div>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    {categories.map((value, index) => (
                        <li key={value} onClick={() => onClickCategory(index)} className={activeIndex === index ? styles.active : ''}>{value}</li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;