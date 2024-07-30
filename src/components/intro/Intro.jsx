import Catalog from '../catalog/Catalog';
import Sidebar from '../sidebar/Sidebar';
import styles from './intro.module.scss'

const Intro = () => {
    return (
        <section className={styles.intro}>
            <div className={`${styles.container} container`}>
                <Sidebar />
                <Catalog />
            </div>
        </section>
    );
}

export default Intro;