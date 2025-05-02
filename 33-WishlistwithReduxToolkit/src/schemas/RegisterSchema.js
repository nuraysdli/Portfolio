import * as yup from "yup";

export let registerschema = yup.object().shape({
    name: yup.string().min(3).required(),
    surname: yup.string().min(5).required(),
    username: yup.string().required().lowercase().trim(),
    email: yup.string().required().email(),
    password: yup
    .string()
    .required()
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Must contain 8 characters"
    ),
    confirmpassword: yup.string().required().oneOf([yup.ref("password"), null], "Passwords must match"),
});