import style from './ClassicPage.module.scss'

const ClassicPage = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.edge}></div>
                <h1>classic page</h1>
            </div>
        </div>
    )
}

export default ClassicPage