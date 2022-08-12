import React from "react";
import Image from "next/image";
import Link from "next/link"
function Nav() {
    return (
        <>
            <div className={styles.container}>
                {/* left */}
                <div className={styles.logo}>
                    <Image src="/WeTeckLogo.png" layout="fill" objectFit="contain" />
                </div>
                {/* middle */}
                <div className={styles.outer}>
                    <ul className={styles.inner}>
                        <li className="mr-4">
                            <Link href="/ourservices">
                                <a className={styles.text}>Our Services</a>
                            </Link>
                        </li >
                        <li className="mr-4">
                            <a className={styles.text}>|</a>
                        </li>
                        <li className="mr-4">
                            <Link href="/portfolio">
                                <a className={styles.text}>Portfolio</a>
                            </Link>
                        </li>
                        <li className="mr-4">
                            <a className={styles.text}>|</a>
                        </li>
                        <li className="mr-4">
                            <Link href="/about">
                                <a className={styles.text}>About Us</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* right */}
                <div className={styles.third}>
                    <Link href="/contactus">
                        <button className={styles.button}>Contact US</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
const styles = {
    container: "flex grid-cols-3 m-5 lg:mx-10 h-10 bg-transparent",
    button: "border-slate-50 rounded-full bg-transparent text-white text-sm border-2 w-28",
    logo: "relative flex flex-grow-0 w-40 h-14",
    outer: "flex flex-grow justify-center",
    inner: "flex justify-center p-2",
    text: "font-sans text-white text-sm",
    third: "flex flex-grow-0 justify-end",
}
export default Nav;
