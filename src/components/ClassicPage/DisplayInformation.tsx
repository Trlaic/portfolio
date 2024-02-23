import style from './DisplayInformation.module.scss'

const DisplayInformation = () => {
    return (
        <div className={style.container}>
            <h1 className={style.heading}>Welcome.</h1>
            <div className={style.paragraphs}>
                <p className={style.paragraph}>My name is Ian Dunkerley, I'm a front-end developer based in Torquay, Devon, UK. I have developed many types of front-ends from well know DJ applications to Ecommerce booking platforms.</p>
                <p className={style.paragraph}>I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.</p>
            </div>
        </div>
    )
}

export default DisplayInformation