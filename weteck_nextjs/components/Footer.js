import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
function _Footer() {
    return (
        <>
            <footer className='divcolor pt-20'>
                <div className='flex justify-around'>

                    <div>

                        {/* google button  */}
                        <a
                            className="order-2 border-transparent  bg-white rounded-full w-8 h-8 flex justify-center"
                            href="https://www.google.com/"
                        >
                            <Image
                                src="/google.png"
                                objectFit="contain"
                                width={20}
                                height={20}
                            />
                        </a>
                        {/* text  */}
                        <h6 className="text-white text-xs p-6 pl-0">
                            Proin ac quam et lectus vestibulum blandit.<br></br>
                            Nunc maximus nibh at placerat tincidunt.<br></br>Nam sem lacus,
                            ornare non ante sed, ultricies<br></br>fringilla massa.
                        </h6>
                    </div>
                    <div>
                        <h3 className="text-white font-bold">Company</h3>
                        <div className="flex justify-evenly p-6 pl-0 ">
                            <div className="text-white text-xs pr-36 ">
                                <Link href="/about">
                                    <a>About</a>
                                </Link>
                                <br></br>

                                <Link href="/contactus">
                                    <a>Contact us</a>
                                </Link>
                                <br></br>

                                <Link href="/careers">
                                    <a>Careers</a>
                                </Link>
                                <br></br>

                                <Link href="/support">
                                    <a>Support</a>
                                </Link>
                            </div>
                            <div className="text-white text-xs ">
                                <Link href="/faq">
                                    <a>FAQ</a>
                                </Link>
                                <br></br>

                                <Link href="/terms">
                                    <a>Terms</a>
                                </Link>
                                <br></br>

                                <Link href="/privacy">
                                    <a>Privacy</a>
                                </Link>
                                <br></br>

                                <Link href="/blogs">
                                    <a>Blogs</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-bold">Contact</h3>
                        <h6 className="text-white text-xs pt-6 pb-2 pl-0">
                            Phone: +1 605 722 2032
                        </h6>
                        <h6 className="text-white text-xs pb-2 pl-0">
                            Email: example@mail.com
                        </h6>
                        <h6 className="text-white text-xs pl-0">
                            Address: Charlotte, North Carolina, United States
                        </h6>
                    </div>
                </div>
                <hr className="w-[93%] ml-14"></hr>
                <div className="p-8 pl-16 flex justify-between">
                    <div>
                        <span className="pr-2">
                            <SocialIcon
                                url="https://facebook.com "
                                bgColor="#037BDB"
                                fgColor="#FFFFFF"
                                style={{ height: 25, width: 25 }}
                            />
                        </span>
                        <span className="pr-2">
                            <SocialIcon
                                url="https://twitter.com "
                                bgColor="#037BDB"
                                fgColor="#FFFFFF"
                                style={{ height: 25, width: 25 }}
                            />
                        </span>
                        <span className="pr-2">
                            <SocialIcon
                                url="https://instagram.com "
                                bgColor="#037BDB"
                                fgColor="#FFFFFF"
                                style={{ height: 25, width: 25 }}
                            />
                        </span>
                        <span className="pr-2">
                            <SocialIcon
                                url="https://youtube.com "
                                bgColor="#037BDB"
                                fgColor="#FFFFFF"
                                style={{ height: 25, width: 25 }}
                            />
                        </span>
                    </div>
                    <div>
                        <h6 className="text-gray-300 text-xs">
                            © 2020 — All Rights Reserved
                        </h6>
                    </div>
                </div>

            </footer>
        </>
    );
}

export default _Footer;
