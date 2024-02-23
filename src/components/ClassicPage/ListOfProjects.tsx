import style from './ListOfProjects.module.scss'

const ListOfProjects = () => {
    return (
        <div className={style.container}>
            <h2 className={style.heading}>Projects</h2>
            <ul className={style.list}>
                <li className={style.list_item}>
                    <p className={style.paragraph}>Domposer</p>
                </li>
                <li className={style.list_item}>
                    <p className={style.paragraph}>Bay.js</p>
                </li>
                <li className={style.list_item}>
                    <p className={style.paragraph}>Cookiemunch</p>
                </li>
                <li className={style.list_item}>
                    <p className={style.paragraph}>Screen Time Converter</p>
                </li>
                <li className={style.list_item}>
                    <p className={style.paragraph}>inline.svg</p>
                </li>
            </ul>
        </div>
    )
}

export default ListOfProjects