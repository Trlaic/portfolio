import { Dispatch, SetStateAction } from 'react'
import style from './ListOfProjects.module.scss'
import { headingList } from '../../helpers/Arrays'

interface ComponentProps {
    activeParagraphNumber: number,
    setActiveParagraphNumber: Dispatch<SetStateAction<number>>
}

const ListOfProjects: React.FC<ComponentProps> = ({setActiveParagraphNumber, activeParagraphNumber}) => {
    
    function handleClick(num: number) {
        if(num === activeParagraphNumber) {
            setActiveParagraphNumber(0)
            return
        }
        setActiveParagraphNumber(num)
    }
    
    return (
        <div className={style.container}>
            <h2 className={style.heading}>Companies & Projects</h2>
            <ul className={style.list}>
                <div className={style.list_before}></div>
                <div className={style.list_after}></div>
                <li className={style.list_item}>
                    <p onClick={() => handleClick(1)} className={style.paragraph}>{headingList[1]}</p>
                </li>
                <li className={style.list_item}>
                    <p onClick={() => handleClick(2)} className={style.paragraph}>{headingList[2]}</p>
                </li>
                <li className={style.list_item}>
                    <p onClick={() => handleClick(3)} className={style.paragraph}>{headingList[3]}</p>
                </li>
                <li className={style.list_item}>
                    <p onClick={() => handleClick(4)} className={style.paragraph}>{headingList[4]}</p>
                </li>
                <li className={style.list_item}>
                    <p onClick={() => handleClick(5)} className={style.paragraph}>{headingList[5]}</p>
                </li>
            </ul>
        </div>
    )
}

export default ListOfProjects