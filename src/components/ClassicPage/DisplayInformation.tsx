import { displayInformationParagraphsArray } from '../../helpers/Arrays'
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
        const className = hidden ? `${style.paragraphs} ${style.hidden}` : `${style.paragraphs}`
        return (
            <div className={className}>
                <p className={style.paragraph}>
                    {paragraph.part1}
                </p>
                <p className={style.paragraph}>
                    {paragraph.part2}
                </p>
            </div>
        )
    })

    return (
        <div className={style.container}>
            <h1 className={style.heading}>Welcome.</h1>
            <div className={style.content}>
                {paragraphs}
            </div>
        </div>
    )
}

export default DisplayInformation