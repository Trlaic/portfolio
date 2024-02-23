import style from './Content.module.scss'
import DisplayInformation from './DisplayInformation'
import ListOfProjects from './ListOfProjects'

const Content = () => {
    return (
        <div className={style.container}>
            <DisplayInformation />
            <ListOfProjects />
        </div>
        
    )
}

export default Content