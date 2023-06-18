"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Login = () => {
    const session = useSession();
    console.log(session);

    return (
        <>
            <main className="flex flex-col items-center">
                <h1 className="text-center text-4xl font-bold">Login</h1>
                <button
                    onClick={() => signIn("google")}
                    className="mt-4 rounded bg-gray-400 p-4 text-white"
                >
                    Login con google
                </button>
                <Link href={"/register"}>o registrate</Link>
            </main>
        </>
    );
};

export default Login;
