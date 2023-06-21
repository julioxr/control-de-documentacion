"use client";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

const Login = () => {
    // const session = useSession();
    // console.log(session);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        // uso el provider que cree en [...nextauth].js
        signIn("credentials", {
            email,
            password,
        });
    };

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

                <div className="mt-8">
                    <h2>login con credenciales</h2>
                    <form
                        className="mt-4 flex flex-col gap-2"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-slate-200"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="bg-slate-200"
                        />
                        <button className="mt-4 rounded bg-gray-400 p-4 text-white">
                            Logear con credencial
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Login;
