import { useState } from 'react'
import style from './Content.module.scss'
import DisplayInformation from './DisplayInformation'
import ListOfProjects from './ListOfProjects'

const Content = () => {

    const [paragraph, setParagraph] = useState(1)


    return (
        <div className={style.container}>
            <DisplayInformation activeParagraphNumber={paragraph}/>
            <ListOfProjects setActiveParagraphNumber={setParagraph}/>
        </div>
        
    )
}

export default Content