import {ErrorMessage, Field} from "formik";
import style from './chooseAva.module.css'


const ChooseAva = () => {
    return (
        <Field name={"photo"} id={"file"} type="input">
            {({field: {value}, form: {setFieldValue}}) => {
                return (
                    <div className={style.container}>
                        <div className={style.wrapper}>
                            <label className={style.uploader} htmlFor={'file'}>
                                Upload
                                <input id="file" name="photo" type="file" onChange={(event) => {
                                    setFieldValue("photo", event.currentTarget.files[0])
                                }} hidden/>
                            </label>
                            <div className={style.title}>
                                {value ? value.name : "Upload Your Photo"}
                            </div>
                        </div>
                        <div>
                            <ErrorMessage name={"photo"} component={'div'} className={style.error}/>
                        </div>

                    </div>
                )
            }}
        </Field>

    )
}

export default ChooseAva