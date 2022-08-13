import logo from '../../Assets/Logo.svg'
import style from './header.module.css'
import NavButton from "../custom/NavButton/NavButton";


const Header = () => {
    return (

        <div className={style.container}>
            <div className={style.wrapper}>
            <div><img src={logo}/></div>
            <div className={style.buttons}>
                <NavButton children={'Users'} toScroll={'getArea'}/>
                <NavButton children={'Sign Up'} toScroll={'postArea'}/>
            </div>
            </div>
        </div>
    )
}

export default Header