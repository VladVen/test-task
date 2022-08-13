import style from './imageBackground.module.css'
import NavButton from "../custom/NavButton/NavButton";


const ImageBackground = () => {
    return (
        <div className={style.container}>
            <div className={style.img}>
                <div className={style.text}>
                    <h1>Test assignment for front-end developer</h1>
                    <div>
                        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with
                        a vast understanding of User design thinking as they'll be building web interfaces with
                        accessibility in mind.
                        They should also be excited to learn, as the world of Front-End Development keeps evolving.
                    </div>
                    <div className={style.button}>
                        <NavButton children={'Sign Up'} toScroll={'postArea'}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ImageBackground