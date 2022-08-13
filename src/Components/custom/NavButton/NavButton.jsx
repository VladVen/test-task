import style from './navButton.module.css'
import {scroller} from "react-scroll";

const NavButton = ({children, toScroll}) => {
    return(
        <div className={style.container} onClick={ () => scroller.scrollTo(toScroll)}>
            <a>
                {children}
            </a>
        </div>
    )
}

export default NavButton