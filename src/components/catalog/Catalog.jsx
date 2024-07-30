import React from 'react'
import Card from '../card/Card';
import Sort from '../sort/Sort';
import styles from './catalog.module.scss'

import products from './../../assets/product.json'


const Catalog = () => {
    return (

        <div className={styles.catalog}>
            <Sort />
            <div className={styles.items}>
                {
                    products.map((obj) =>
                        <Card key={`${obj.title}`}
                            img={obj.imageUrl}
                            weight={obj.weight}
                            calories={obj.calories}
                            name={obj.title}
                            price={obj.price}
                            description={obj.description}
                        />)
                }

            </div>
        </div>
    );
}

export default Catalog;