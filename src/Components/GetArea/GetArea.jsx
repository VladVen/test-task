import User from "./User";
import style from './getArea.module.css'
import * as Scroll from 'react-scroll';
import AppButton from "../custom/Button/AppButton";
import {useEffect, useState} from "react";

let Element = Scroll.Element;


const GetArea = ({users, changePage}) => {
    const [data, setData] = useState(users)
    const [page, setPage] = useState(1)

    useEffect(() => setData(users),[users])

    const nextPage = () => {
        setPage(page + 1 )
        changePage(page)
    }
    const prevPage = () => {
        setPage(page - 1 )
        changePage(page)
    }

    return (
        <Element name={'getArea'}>
            <div className={style.container}>
                <div className={style.title}>
                    <h1>
                        Working with GET request
                    </h1>
                </div>

                <div className={style.wrapper}>
                    {
                        data.map(item => <User user={item} key={item.id}/>)
                    }
                </div>
                <div className={style.buttonContainer}>
                {page > 1 && <div className={style.button}>
                    <AppButton children={'Go Back'} onClick={prevPage}/>
                </div>}
                <div className={style.button}>
                    <AppButton children={'Show More'} onClick={nextPage}/>
                </div>
                </div>
            </div>

        </Element>
    )
}

export default GetArea