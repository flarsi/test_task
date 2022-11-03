import * as Yup from 'yup'
export const addNewsSchema= Yup.object().shape({
    title: Yup.string().required("Title is required"),
    body: Yup.string().required("Body is required"),
    email: Yup.string().email("Invalid email").required("Email is required")
})