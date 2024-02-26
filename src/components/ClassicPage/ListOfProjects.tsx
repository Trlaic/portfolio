import { Dispatch, SetStateAction } from 'react'
import style from './ListOfProjects.module.scss'

interface ComponentProps {
    setActiveParagraphNumber: Dispatch<SetStateAction<number>>
}

const ListOfProjects: React.FC<ComponentProps> = ({setActiveParagraphNumber}) => {
    
    function handleClick() {
        setActiveParagraphNumber(0)
    }
    
    return (
        <div onClick={handleClick} className={style.container}>
            <h2 className={style.heading}>Projects</h2>
            <ul className={style.list}>
                <li className={style.list_item}>
                    <p className={style.paragraph}>Latin</p>
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