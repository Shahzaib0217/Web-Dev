import "../styles/global.css"
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
    const router = useRouter()
    return (
        <>
            <nav className="header-nav">
                <ul>
                    <li>
                        <Link className={router.pathname == "/" ? "active" : ""} href="/">Home</Link>
                        {/* make active class in css for bolding link text */}
                    </li>
                    <li>
                        <Link className={router.pathname == "/about" ? "active" : ""} href='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link className={router.pathname == "/blog" ? "active" : ""} href='/blog'>Blog</Link>
                    </li>
                </ul>
            </nav>
            <p>Header</p>
            {/* Soft closing (in tag) and destrucutring */}
            <Component {...pageProps} />
            <p>Footer</p>
        </>
    )
}