"use client";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

const FormLogin = () => {
    const session = useSession();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        // uso el provider que cree en [...nextauth].js
        signIn("credentials", {
            email,
            password,
            callbackUrl: "/dashboard",
        });
    };
    return (
        <div className="w-full max-w-lg bg-[#fbfbfb] p-12">
            <h1 className="text-center text-4xl font-semibold">
                Ingresa a tu cuenta
            </h1>

            <div className="mt-8">
                <form
                    className="mt-4 flex flex-col gap-6"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-1 text-sm">
                                Email o nombre de usuar io
                            </label>
                            <input
                                type="email"
                                placeholder="Ingresa tu email o usuario"
                                className="h-12 rounded border pl-4 focus:outline-gray-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="mb-1 text-sm">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                className="h-12 rounded border pl-4 focus:outline-gray-500"
                            />
                        </div>
                    </div>
                    <button className="mt-4 rounded bg-hdarkblue p-4 text-lg font-medium text-white">
                        Iniciar sesión
                    </button>
                </form>
            </div>
            <p className="py-4 text-center">O ingresa con</p>
            <div>
                <button
                    onClick={() => signIn("google")}
                    className="flex w-full items-center justify-center gap-2 rounded border bg-white p-4 text-lg font-medium"
                >
                    <img
                        src="https://www.taringa.net/social/google.svg"
                        alt="google"
                        className=""
                    />
                    <span>Google</span>
                </button>
                <span className="mt-6 flex justify-center gap-2">
                    ¿No tenes cuenta?{" "}
                    <Link href={"/register"} className="text-hblue">
                        Registrate
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default FormLogin;
