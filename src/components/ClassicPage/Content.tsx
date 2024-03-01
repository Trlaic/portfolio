import { useState } from 'react'
import style from './Content.module.scss'
import DisplayInformation from './DisplayInformation'
import ListOfProjects from './ListOfProjects'
import { useColors } from '../../context/useColors'

const Content = () => {

    const [paragraph, setParagraph] = useState(0)
    const {randomColor} = useColors()

    const handleImageClick = function() {
        setParagraph(0)
    }

    return (
        <div onMouseEnter={randomColor} onMouseLeave={randomColor} className={style.container}>
            <img onClick={handleImageClick} className={style.image} src="../../../src/assets/home_page.png" alt="Home" />
            <DisplayInformation activeParagraphNumber={paragraph}/>
            <ListOfProjects activeParagraphNumber={paragraph} setActiveParagraphNumber={setParagraph}/>
        </div>
        
    )
}

export default Content