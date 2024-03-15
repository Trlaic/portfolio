import style from './HeadingAnimation.module.scss'
import { headingList } from '../../helpers/Arrays'


const HeadingAnimation = () => {

    return (
        <div className={style.content}>
            {headingList[0]}
            <h2>{headingList[0]}</h2>
            <h2>{headingList[0]}</h2>
        </div>
    )

}

export default HeadingAnimation