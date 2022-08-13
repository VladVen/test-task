import style from './appButton.module.css'

const AppButton = ({children, onClick}) => {
    return(
        <div className={style.container} onClick={onClick}>
            <a>
                {children}
            </a>
        </div>
    )
}

export default AppButton