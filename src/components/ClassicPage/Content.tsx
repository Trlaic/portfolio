import { useState } from 'react'
import style from './Content.module.scss'
import DisplayInformation from './DisplayInformation'
import ListOfProjects from './ListOfProjects'
import { useNavigate } from 'react-router-dom'
import ContactInfo from '../ContactInfo/ContactInfo'

const Content = () => {

    const navigate = useNavigate()
    const [paragraph, setParagraph] = useState(0)

    const handleImageClick = function() {
        navigate('/')
    }

    return (
        <div className={style.container}>
            <img onClick={handleImageClick} className={style.image} src="./home_page.png" alt="Home" />
            <ContactInfo />
            <DisplayInformation activeParagraphNumber={paragraph}/>
            <ListOfProjects activeParagraphNumber={paragraph} setActiveParagraphNumber={setParagraph}/>
        </div>
        
    )
}

export default Content