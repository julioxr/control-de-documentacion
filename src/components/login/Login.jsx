"use client";
import { useSession, signIn, signOut } from "next-auth/react";

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
            </main>
        </>
    );
};

export default Login;
