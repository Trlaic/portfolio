import style from './ContactInfo.module.scss'

const ContactInfo = () => {
    return (
        <div className={style.container}>
            <a target='_blank' href="https://github.com/Trlaic">
                <img className={style.image} src="./icons8-github-64.png" alt="git" />
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/igor-trlai%C4%87-32a99a15b/">
                <img className={style.image} src="./icons8-linkedin-64.png" alt="linkedin" />
            </a>
        </div>
    )
}

export default ContactInfo