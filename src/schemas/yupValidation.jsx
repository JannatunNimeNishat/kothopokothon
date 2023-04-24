
import * as Yup from 'yup';

const registerValidation = Yup.object({
    email: Yup
        .string()
        .email('invalid email')
        .required('Please enter your email'),
    password: Yup
        .string()
        .required("Please enter your email")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    confirmPassword: Yup
        .string()
        .required("Please re-write your password")
        .oneOf([Yup.ref('password'), null], 'Password must match')
})

export default registerValidation;





