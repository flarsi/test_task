import React from 'react';
import {Box, Card, CardContent, CardHeader, Typography} from "@mui/material";
import styles from './News.module.css'

export const News = ({newsItem}) => {
    return <>
        <Card className={styles.newsBox}>
            <CardHeader
                title={newsItem.title}
                subheader={newsItem.email}
                className={styles.header}
            />
            <CardContent className={styles.content}>
                <Typography variant="body2" color="text.secondary" className={styles.text}>
                    {newsItem.body}
                </Typography>
            </CardContent>
            <Typography className={styles.date}> {newsItem.date}</Typography>
        </Card>
    </>
}