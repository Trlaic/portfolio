import { displayInformationParagraphsArray, headingList } from '../../helpers/Arrays'
import HeadingAnimation from '../HeadingAnimation/HeadingAnimation'
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
            <div key={headingList[index]} className={`${classAction} ${classStart}`}>
                {index === 0 ? 
                    <HeadingAnimation />
                    : 
                    <h2 className={style.heading_2}>{headingList[index]}</h2>
                }
                {paragraph.part1 ? 
                    <div className={style.paragraphs}>
                        <p className={style.paragraph}>
                            {paragraph.part1}
                        </p>
                        <p className={style.paragraph}>
                            {paragraph.part2}
                        </p>
                    </div> :
                    <div className={style.paragraphs}>
                        <h3 className={style.heading_3}>{paragraph.title}</h3>
                        <p className={style.date}>{paragraph.employment}<span className={style.date_number}>{paragraph.date}</span></p>
                        <p className={style.description}>{paragraph.description}</p>
                        <p className={style.description}>{paragraph.descriptionNote}</p>
                        <div className={style.tech_container}>{paragraph.tech?.map((t, i) => <div key={`tech-${index}-${i}`} className={style.tech}>{t}</div>)}</div>
                        <a className={style.link} href={paragraph.link} target="_blank">View Site</a>
                    </div> 
                }
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