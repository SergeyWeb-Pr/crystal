import React from "react";
import styles from './sort.module.scss'

const Sort = () => {
    const [show, setShow] = React.useState(false);
    const [selected, setSelected] = React.useState(0);
    const labels = ['популярности (DESC)', 'популярности (ASC)', 'цене (DESC)', 'цене (ASC)', 'алфавиту (DESC)', 'алфавиту (DESC)', 'алфавиту (ASC)'];
    const sortName = labels[selected];

    const onClickLabels = (index) => {
        setSelected(index);
        setShow(false); 
    }

    return (
        <div className={styles.top}>
            <div className="block-title">Каталог</div>
            <div className={styles.sort}>
                <div onClick={() => setShow(!show)} className={`${styles.sort__label} filter-button`}>Сортировать по: <span>{sortName}</span></div>
                {
                    show && (
                        <div className={styles.sort__popup}>
                            <ul>
                                {labels.map((value, index) => (
                                    <li key={value} onClick={() => onClickLabels(index)} className={selected === index ? styles.active : ''}>{value}</li>
                                ))}
                            </ul>
                        </div>
                    )
                }
            </div>

        </div>
    );
}

export default Sort;