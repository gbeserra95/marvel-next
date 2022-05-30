
import { QueryClient, QueryClientProvider, Hydrate } from "react-query"
import { MenuProvider } from "../context/MenuContext"

import Layout from '../components/Layout'

import { ThemeProvider } from '@mui/system'

import theme from '../theme'
import '../styles/globals.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <MenuProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MenuProvider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
