import style from './appInput.module.css'
import {ErrorMessage, Field} from "formik";


const AppInput = ({fieldName, number = false, placeholder}) => {
    return (
        <Field name={fieldName} id={fieldName} type="input">
            {({field: {value}, form: {setFieldValue}}) => (
                <div className={style.container}>
                <input placeholder={placeholder} className={style.input} value={value} onChange={(e) => setFieldValue(fieldName, e.currentTarget.value)}/>
            {number && <div className={style.number}> +38 (XXX) XXX - XX - XX </div>}

                    <ErrorMessage name={fieldName} className={style.error} component={'div'}/>
                </div>
                )}
        </Field>
    )
}

export default AppInput