"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Multiple = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/");
            return;
        }
    }, [status]);

    if (status === "authenticated") {
        return (
            <>
                <h1 className="text-center text-6xl font-bold">Multiple</h1>
            </>
        );
    }
};

export default Multiple;
