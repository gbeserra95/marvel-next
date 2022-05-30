import Head from "next/head"
import Link from "next/link"

import Background from "../components/Background"
import StyledButton from "../components/StyledButton"

import { Typography } from "@mui/material"

import { useEffect, useContext } from "react"
import { MenuContext } from "../context/MenuContext"

function Home() {
  const { setIsOpen } = useContext(MenuContext)

  useEffect(() => {
    setIsOpen(false)
  }, [setIsOpen])

  return (
    <>
      <Head>
          <title>Marvel Next | Home</title>
      </Head>
      <Background>
          <Typography variant="h1" color="secondary" zIndex={1} textAlign="center">Welcome to the Multiverse of Next!</Typography>
          <Typography variant="h2" color="secondary" zIndex={1} textAlign="center">Explore everything about your favorite heroes and why not villains?</Typography>
          <Link href="/characters" passHref>
            <a><StyledButton variant="outlined">Click to discover</StyledButton></a>
          </Link>
      </Background>
    </>
  )
}

export default Home