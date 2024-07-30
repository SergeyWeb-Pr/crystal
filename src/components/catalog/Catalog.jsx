import React from 'react'
import Card from '../card/Card';
import Skeleton from '../card/Skeleton';
import Sort from '../sort/Sort';
import styles from './catalog.module.scss'
import products from './../../assets/product.json'


const Catalog = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('https://66a807c653c13f22a3d1b7d6.mockapi.io/api/v1/items')
            .then((res) => {
                return res.json();
            }).then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
    }, []);

    return (

        <div className={styles.catalog}>
            <Sort />
            <div className={styles.items}>
                {
                    isLoading ? [... new Array(8)].map((_, index) => <Skeleton key={index} />) : items.map((obj) =>
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