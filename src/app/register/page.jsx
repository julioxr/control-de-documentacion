"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
    const [err, setErr] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });
            res.status === 201 &&
                router.push("/login?success=Account has bee created");
        } catch (error) {
            setErr(true);
        }
    };

    return (
        <>
            <section className="flex flex-col items-center">
                <h1 className="text-center text-4xl font-bold">Registrate</h1>

                <form
                    className="mt-4 flex flex-col gap-2"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Username"
                        className="bg-slate-200"
                    />
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
                        Register
                    </button>
                </form>
                {err && <p>Hubo un error</p>}
                <Link href={"/"}>Volver al login</Link>
            </section>
        </>
    );
};

export default page;
