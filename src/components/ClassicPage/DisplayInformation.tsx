import { displayInformationParagraphsArray, headingList } from '../../helpers/Arrays'
import style from './DisplayInformation.module.scss'

interface ComponentProps {
    activeParagraphNumber: number
}

const DisplayInformation: React.FC<ComponentProps> = ({activeParagraphNumber}) => {
    
    const paragraphs = displayInformationParagraphsArray.map((paragraph, index) => {   
        let classAction = ''
        if(activeParagraphNumber === index) {
            classAction = index === 0 ? `` : `${style.wrap_paragraphs_active}`
        } else {
            classAction = index === 0 ? `${style.wrap_welcome_hidden}` : ''
        }
        const classStart = index === 0 ? `${style.wrap_welcome}` : `${style.wrap_paragraphs}`
        return (
            <div className={`${classAction} ${classStart}`}>
                {index === 0 ? 
                    <h1 className={style.heading}>{headingList[index]}</h1>
                    : 
                    <h2 className={style.heading_2}>{headingList[index]}</h2>
                }
                <div className={style.paragraphs}>
                    <p className={style.paragraph}>
                        {paragraph.part1}
                    </p>
                    <p className={style.paragraph}>
                        {paragraph.part2}
                    </p>
                </div>
            </div>

        )
    })

    return (
        <div className={style.container}>
            <div className={style.content}>
                {paragraphs}
            </div>
        </div>
    )
}

export default DisplayInformation