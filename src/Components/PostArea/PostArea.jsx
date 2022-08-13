import AppInput from "../custom/Input/AppInput";
import style from './postArea.module.css'
import * as Scroll from "react-scroll";
import {ErrorMessage, Field, Form, Formik} from "formik";
import AppButton from "../custom/Button/AppButton";
import done from '../../Assets/success-image.svg'
import ChooseAva from "../custom/ChooseAva/ChooseAva";
import formValidatorSchema from "../formValidation/formValidation";


let Element = Scroll.Element;


const PostArea = ({register, userAdded = false}) => {

    if (userAdded) {
        return (
            <div className={style.container}>
                <h1 className={style.title}> User successfully registered</h1>
                <img src={done}/>
            </div>
        )
    }

    return (
        <Element name={'postArea'}>
            <div className={style.container}>
                <h1 >
                    Working with POST request
                </h1>
                <Formik
                    initialValues={{name: '', email: '', phone: '', position_id: '', photo: ''}}
                    validationSchema={formValidatorSchema}
                    onSubmit={async (values, {setSubmitting}) => {
                        await register(values.name, values.email, values.phone, values.position_id, values.photo)
                        setSubmitting(false);
                    }}>
                    {({isSubmitting, handleSubmit, setFieldValue}) => (
                        <Form className={style.container}>
                            <AppInput fieldName={'name'} placeholder={'Your name'}/>
                            <AppInput fieldName={'email'} placeholder={'Email'}/>
                            <AppInput fieldName={'phone'} placeholder={'Phone'} number={true}/>

                            <div className={style.select}>
                                <div className={style.title}>Select your position</div>
                                <label>
                                    <Field type="radio" name="position_id" value={"1"}/>
                                    Security
                                </label>
                                <label>
                                    <Field type="radio" name="position_id" value={"2"}/>
                                    Designer
                                </label>
                                <label>
                                    <Field type="radio" name="position_id" value={"3"}/>
                                    Content manager
                                </label>
                                <label>
                                    <Field type="radio" name="position_id" value={"4"}/>
                                    Lawyer
                                </label>
                                <ErrorMessage name={'position_id'} component={'div'} className={style.error} />
                            </div>
                            <ChooseAva/>
                            <div>
                                <AppButton children={'Sign Up'} onClick={handleSubmit} disabled={isSubmitting}>
                                    Submit
                                </AppButton>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </Element>
    )
}

export default PostArea