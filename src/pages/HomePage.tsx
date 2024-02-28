import { useNavigate } from 'react-router-dom'
import GeometryBox from '../components/GeometryBox'
import styles from './HomePage.module.scss'

const HomePage = () => {
    const navigate = useNavigate()
    function goToClassicPage() {
        navigate('/resume')
    }

    function goToAnimatedPage() {
        navigate('/resume-animated')
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Portfolio | Igor Trlaic</h1>
            <div className={styles.button_container}>
                <button onClick={goToClassicPage} className={`${styles.margin_right} button`}>Classic</button>
                <GeometryBox />
                <button onClick={goToAnimatedPage} className={`${styles.margin_left} button`}>Animated</button>
            </div>
        </div>
    )
}

export default HomePage