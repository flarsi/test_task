import React, {useEffect} from 'react';
import {Box} from "@mui/material";
import styles from './NewsList.module.css'
import {News} from "../News/News";
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../redux/actions";

export const NewsList = () => {
    const dispatch = useDispatch()
    const news = useSelector((state) => state.news)
    useEffect(() => {
        dispatch(getNews())
    }, [])
    return <>
        <Box className={styles.news}>
            {news ? news.data.map(newsItem => <News newsItem={newsItem} key={Math.random()}/>) : <p>loading</p>}
        </Box>
    </>
}