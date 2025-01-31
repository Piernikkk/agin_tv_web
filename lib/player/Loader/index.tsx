import classes from './loader.module.css'
import { LoaderContainer } from './styles'

export default function Loader() {
    return (
        <div className={LoaderContainer}>
            <div className={classes.loader}></div>
        </div>
    )
}