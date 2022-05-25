import Head from "next/head"
import Link from "next/link"

import Background from "../components/Background"
import StyledButton from "../components/StyledButton"

import { Typography } from "@mui/material"

function Home() {
  return (
    <>
      <Head>
          <title>Marvel Next | Home</title>
      </Head>
      <Background>
          <Typography variant="h1" color="secondary" zIndex={1}>Welcome to the Multiverse of Next!</Typography>
          <Typography variant="h2" color="secondary" zIndex={1}>Explore everything about your favorite heroes and why not villains?</Typography>
          <Link href="/characters" passHref>
            <a><StyledButton variant="outlined">Click to discover</StyledButton></a>
          </Link>
      </Background>
    </>
  )
}

export default Home