import Content from '../../components/ClassicPage/Content'
import style from './ClassicPage.module.scss'

const ClassicPage = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.edge}></div>
                <Content />
            </div>
        </div>
    )
}

export default ClassicPage