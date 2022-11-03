import React, {useState} from 'react';
import { useFormik} from "formik";
import {Box, Button, TextField, Typography} from "@mui/material";
import styles from './AddNewsForm.module.css'
import {addNewsSchema} from "../../validationSchema";
import {useDispatch, useSelector} from "react-redux";
import {addNews} from "../../redux/actions";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

export const AddNewsForm = () => {
    const dispatch = useDispatch()
    const [isMessageVisible, setIsMessageVisible] = useState(false)
    const formik = useFormik(
        {
            initialValues: {
                title: "",
                body: "",
                email: ""
            },
            validationSchema: addNewsSchema,
            onSubmit: (values, {setSubmitting, resetForm}) => {
                dispatch(addNews(values))
                setIsMessageVisible(true)
                setSubmitting(false)
                resetForm()
            },
        });
    return <>
        <Box className={styles.formWrapper}>
            <Typography variant='h2'> Add news</Typography>
            <form onSubmit={formik.handleSubmit} className={styles.form}>
                <TextField
                    id="title"
                    label="title"
                    value={formik.values.title}
                    fullWidth
                    onChange={formik.handleChange}
                    className={styles.input}
                    error={formik.touched.title && formik.errors.title}
                    helperText = {formik.touched.title && formik.errors.title}
                />
                <TextField
                    id="body"
                    label="body"
                    value={formik.values.body}
                    fullWidth
                    multiline
                    onChange={formik.handleChange}
                    className={styles.input}
                    error={formik.touched.body && formik.errors.body}
                    helperText = {formik.touched.body && formik.errors.body}
                />
                <TextField
                    id="email"
                    label="email"
                    value={formik.values.email}
                    fullWidth
                    multiline
                    onChange={formik.handleChange}
                    className={styles.input}
                    error={formik.touched.email && formik.errors.email}
                    helperText = {formik.touched.email && formik.errors.email}
                />
                <Box className={styles.buttonsWrapper}>
                    <Button variant="contained" on type="submit">SUBMIT</Button>
                </Box>
            </form>
        </Box>
        {isMessageVisible && <SuccessMessage message={"News added"} isVisible={isMessageVisible} setIsVisible={setIsMessageVisible}/>}
    </>
}