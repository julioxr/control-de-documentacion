"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const MainNavbar = () => {
    const session = useSession();
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
                                alt="logo de la empresa"
                            />
                        </div>
                    </Link>
                    <ul className="flex justify-center gap-8">
                        <li className="">
                            <Link href="/update">Actualización</Link>
                        </li>
                        <li className="">
                            <Link href="/create">Alta</Link>
                        </li>
                        {/* <li className="">
                            <Link href="/multiple">Multiple</Link>
                        </li> */}
                        <li className="">
                            <Link href="/expiration">Vencimientos</Link>
                        </li>
                    </ul>
                    {/* Boton para logout */}
                    {session.status === "authenticated" && (
                        <button
                            className="rounded bg-slate-200 p-2"
                            onClick={signOut}
                        >
                            Salir
                        </button>
                    )}
                </nav>
            </section>
        </>
    );
};

export default MainNavbar;
