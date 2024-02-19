import styles from './HomePage.module.scss'

const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Portfolio | Igor Trlaic</h1>
            <div className={styles.button_container}>
                <button>Standard</button>
                <canvas className={styles.webgl}></canvas>
                <button>Interesting</button>
            </div>
        </div>
    )
}

export default HomePage