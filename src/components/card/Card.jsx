import React from 'react'
import styles from './card.module.scss'
import labelNewImg from './../../assets/img/icons/label-new.png'
import shoppingCartImg from './../../assets/img/icons/shopping-cart.svg'

const Card = ({ img, weight, calories, name, price, description, sizes }) =>  {
    const [productCount, setProductCount] = React.useState(0);

    const productAddCount = () => {
        setProductCount(productCount + 1);
    }

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.image}>
                    <img src={img} alt="" />
                    <div className={styles.label}>
                        <img src={labelNewImg} alt="" />
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={styles.value}>
                        <div className={styles.weight}>{weight} гр.
                        </div>
                        <div className={styles.calories}>{calories} ккал.
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>{name}
                        </div>
                        <div className={styles.price}>{price}<span> ₽</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.description}>
                    <p>{description}</p>

                </div>
                <button onClick={productAddCount} className={`${styles.button} btn-reset button3`}>
                    <img src={shoppingCartImg} alt="" />
                    <span>В корзину</span>
                    <div className="count">{productCount}</div>
                </button>
            </div>

        </div>
    );
}

export default Card;