// "use client";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
import MainDocumentation from "@/components/documentation/MainDocumentation";
import MainLogin from "@/components/login/MainLogin";

export default async function Home() {
    // const session = useSession();
    // const router = useRouter();
    // En este archivo deberia ir el login, si logea va a ver main documentation, sino va a ver el componente de login

    // if (session.status === "authenticated") router.push("/dashboard");

    return (
        <>
            <MainLogin />
        </>
    );
}
