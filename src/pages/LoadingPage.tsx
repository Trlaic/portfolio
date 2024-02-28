import { Triangle } from "react-loader-spinner"
import style from './LoadingPage.module.scss'

const LoadingPage = () => {
    return (
        <Triangle
            visible={true}
            height="240"
            width="240"
            color="#0B6623"
            ariaLabel="triangle-loading"
            wrapperClass={style.spinner}
        />
    )
}

export default LoadingPage