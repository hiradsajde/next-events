import Menu from "../ui/menu/menu"
import Head from 'next/head'

const Grid = ({children}) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <div className="container">
                <Menu/>
                {children}
            </div>
        </>
    )
}

export default Grid