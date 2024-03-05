import Content from '../../components/ClassicPage/Content'
import style from './ClassicPage.module.scss'

const ClassicPage = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.content_before}></div>
                <div className={style.content_after}></div>
                <div className={style.edge}>
                    <div className={style.edge_before}></div>
                    <div className={style.edge_after}></div>
                </div>
                <Content />
            </div>
        </div>
    )
}

export default ClassicPage