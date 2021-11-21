import '../styles/globals.scss'
import Grid from '../components/hoc/grid'

function MyApp({ Component, pageProps }) {
  return <Grid><Component {...pageProps} /></Grid>
}

export default MyApp
