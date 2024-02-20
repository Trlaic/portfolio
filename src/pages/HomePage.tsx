import GeometryBox from '../components/GeometryBox'
import styles from './HomePage.module.scss'

const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Portfolio | Igor Trlaic</h1>
            <div className={styles.button_container}>
                <button className={`${styles.margin_right} button`}>Classic</button>
                <GeometryBox />
                <button className={`${styles.margin_left} button`}>Animated</button>
            </div>
        </div>
    )
}

export default HomePage