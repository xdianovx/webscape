import {Header} from "./";
import {Footer} from "./";


export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer/>
        </>
    )
}