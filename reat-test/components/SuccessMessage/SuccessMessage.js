import React, {useEffect} from 'react';
import {Box, Typography} from "@mui/material";
import styles from './SuccessMessage.module.css'

const SuccessMessage = ({message, isVisible, setIsVisible}) => {
    useEffect(()=>{
        setTimeout(()=>{setIsVisible(false)}, 2000)
    },[])
    return <>
        <Box className={styles.messageBox} onClick={()=>setIsVisible(false)}>
            <Typography>{message}</Typography>
        </Box>
    </>
}
export default SuccessMessage