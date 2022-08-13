import React, {useCallback, useState} from "react";
import {connect} from "react-redux";
import style from './getArea.module.css'
import {changePage, getUsers} from "../../Redux/userReducer";
import GetArea from "./GetArea";
import {useEffect} from "react";
import Preloader from "./Preloader";


const GetAreaContainer = React.memo(({getUsers,users, changePage}) => {
    const[fetching, setFetching] = useState(true)

    const loadUsers = useCallback(async () => {
        await getUsers()
        setFetching(false)
    }, [getUsers])

    useEffect(() => loadUsers, [])

    if(fetching) {
        return (
            <div className={style.container}>
                <Preloader/>
            </div>
            )
    }
    return (
        <div>
            <GetArea users={users} changePage={changePage} />
        </div>
    )
})

const mapStateToProps = (state) => ({
    users: state.users.users
})

export default connect(mapStateToProps, {getUsers,changePage})(GetAreaContainer)