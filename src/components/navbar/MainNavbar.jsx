import React from "react";
import Image from "next/image";
import Link from "next/link";

const MainNavbar = () => {
    return (
        <>
            <section className="flex h-20 w-full bg-white">
                <nav className="container mx-auto flex  items-center justify-between ">
                    <Link href="/">
                        <div className="">
                            <Image
                                width={150}
                                height={150}
                                src="/logo/holcim_logo.svg"
                            />
                        </div>
                    </Link>
                    <ul className="flex justify-center gap-4">
                        <li className="">
                            <Link href="/create">Alta de acreedor</Link>
                        </li>
                        <li className="">
                            <Link href="/update">
                                Actualización de documentación
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/multiple">Actualización multiple</Link>
                        </li>
                        <li className="">
                            <Link href="/expiration">Vencimientos</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    );
};

export default MainNavbar;
