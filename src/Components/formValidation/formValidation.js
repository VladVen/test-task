import * as Yup from "yup";


const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg'];
const phoneNumber = /((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/

const formValidatorSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .max(60, "Must be less than 60 characters")
        .required("Required"),
    email: Yup.string()
        .email('Invalid Email')
        .required("Required"),
    phone: Yup.string()
        .matches(phoneNumber, "Invalid Phone Number")
        .required('A phone number is required'),
    position_id: Yup.string()
        .required("Select your position"),
    photo: Yup.mixed()
        .nullable()
        .required('Avatar is required')
        .test('size',
            'Too big', (value) => !value || (value && value.size <= 5000 * 1024))
        .test('format',
            'Wrong format, supported jpg/jpeg only', (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))),

});
export default formValidatorSchema