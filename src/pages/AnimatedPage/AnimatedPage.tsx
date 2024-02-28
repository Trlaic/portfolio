import { useNavigate } from "react-router-dom"
import style from './AnimatedPage.module.scss'

const AnimatedPage = () => {
    const navigate = useNavigate()
    function goToClassicPage() {
        navigate('/resume')
    }

    return (
        <div className={style.container}>
            <div className={style.text}>
                <h1 className={style.heading}>Page Under Construction</h1>
                <p className={style.paragraph}>
                    The page you're trying to access is currently under construction.
                </p>
                <p className={style.paragraph}>
                    In the meantime, feel free to visit the Classic page.
                </p>
                <button onClick={goToClassicPage} className="button">Classic</button>  
            </div>
        </div>
    )
}

export default AnimatedPage