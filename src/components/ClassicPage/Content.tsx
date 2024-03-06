import { useState } from 'react'
import style from './Content.module.scss'
import DisplayInformation from './DisplayInformation'
import ListOfProjects from './ListOfProjects'

const Content = () => {

    const [paragraph, setParagraph] = useState(0)

    const handleImageClick = function() {
        setParagraph(0)
    }

    return (
        <div className={style.container}>
            <img onClick={handleImageClick} className={style.image} src="../../../public/home_page.png" alt="Home" />
            <DisplayInformation activeParagraphNumber={paragraph}/>
            <ListOfProjects activeParagraphNumber={paragraph} setActiveParagraphNumber={setParagraph}/>
        </div>
        
    )
}

export default Content