import React from 'react';
import Head from "next/head";
import {Box, Grid} from "@mui/material";
import {NewsList} from "../components/NewsList/NewsList";

 const News = () =>{
    return <>
        <div>
            <Head>
                <title> News</title>
            </Head>
            <main >
                <Box>
                    <Grid container>
                        <NewsList />
                    </Grid>
                </Box>
            </main>
        </div>
    </>
}
export default News