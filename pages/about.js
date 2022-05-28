import Image from "next/image"

import { Container, Grid, Typography } from "@mui/material"

function About() {
    return(
        <Container maxWidth="lg">
            <Grid container minHeight="calc(100vh - 112px)" padding={4} spacing={4} alignItems="center">
                <Grid item container height="512px" xs={12} sm={12} md={8} position="relative" justifyContent="center">
                    <Image 
                        src="/images/spider-man.jpg"
                        width="960px"
                        height="100%"
                        alt="Spider-man reading a comic book while climbing a brick wall"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant="p" color="secondary">
                        Hey, everyone. 
                        <br /><br />
                        As a fan of all Marvel movies and a student of software development, I decided to apply some of the concepts I have learned so far about Next, React, Third Parties API fetching and Material UI components library. So, this website was only developed for study purposes.
                        <br /><br />
                        If you liked this project, please access my Github profile, clone this repository and play with it! You may upgrade, refactor or just follow along with the code... there are no limits!
                        Also, if you are interest in giving me any feedback regarding my coding skills, feel free to reach me out at any of my social medias or contact information.
                        <br /><br />
                        Wish you all the best!
                        <br /><br />
                        Regards,
                        <br />
                        Gabriel.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About