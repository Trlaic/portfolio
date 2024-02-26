import { displayInformationParagraphsArray, headingList } from '../../helpers/Arrays'
import style from './DisplayInformation.module.scss'

interface ComponentProps {
    activeParagraphNumber: number
}

const DisplayInformation: React.FC<ComponentProps> = ({activeParagraphNumber}) => {
    
    const paragraphs = displayInformationParagraphsArray.map((paragraph, index) => {   
        let hidden = true
        if(activeParagraphNumber === index) {
            hidden = false
        }
        const classNameParagraphs = hidden ? `${style.paragraphs} ${style.hidden}` : `${style.paragraphs}`
        const classNameHeadingOne = hidden ? `${style.heading} ${style.hidden}` : `${style.heading}`
        const classNameHeadingTwo = hidden ? `${style.heading_2} ${style.hidden}` : `${style.heading_2}`

        return (
            <>
                {index === 0 ? 
                    <h1 className={classNameHeadingOne}>{headingList[index]}</h1>
                    : 
                    <h2 className={classNameHeadingTwo}>{headingList[index]}</h2>
                }
                <div className={style.content}>
                    <div className={classNameParagraphs}>
                        <p className={style.paragraph}>
                            {paragraph.part1}
                        </p>
                        <p className={style.paragraph}>
                            {paragraph.part2}
                        </p>
                    </div>
                </div>
            </>

        )
    })

    return (
        <div className={style.container}>
            {paragraphs}
        </div>
    )
}

export default DisplayInformation