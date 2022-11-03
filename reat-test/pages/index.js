import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Box, Button, Container, Grid} from "@mui/material";
import React from "react";
import {NewsList} from "../components/NewsList/NewsList";
import {useRouter} from "next/router";

export default function Home() {
    const router =useRouter()
    return (
        <> <div>
            <Head>
                <title> News</title>
            </Head>
            <main >
                <Box sx={{width:'100%', height: '100vh'}}>
                    <Container>
                        <NewsList />
                        <Button variant={"outlined"} className={styles.button} onClick={()=> router.push('/addNews')}> Add news</Button>
                    </Container>
                </Box>
            </main>
        </div></>
    );
}
