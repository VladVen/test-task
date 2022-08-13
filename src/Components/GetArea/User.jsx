import style from './user.module.css'

const User = ({user}) => {
    return(

        <div className={style.container}>
            <div><img src={user.photo} className={style.photo}/></div>
            <div>{user.name}</div>
            <div >
                <div>{user.position}</div>
                <div>{user.email}</div>
                <div>{user.phone}</div>
            </div>

        </div>
    )
}

export default User