"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import FormLogin from "./FormLogin";
import { useRouter } from "next/navigation";

const Login = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/dashboard");
            return;
        }
    }, [status]);

    if (status === "unauthenticated") {
        return (
            <>
                <main className="container mx-auto flex min-h-[calc(100vh-80px)] items-center justify-center gap-52">
                    <div className="">
                        <img
                            // src="https://www.taringa.net/images/general/lince.svg"
                            className="-mt-2 max-w-md"
                            src="https://www.holcim.com.ec/sites/ecuador/files/2022-06/fuerte-circulo.png"
                            alt="asdsa"
                        />
                    </div>
                    <FormLogin />
                </main>
            </>
        );
    }
};

export default Login;
