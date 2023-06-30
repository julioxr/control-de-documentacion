"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
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
                <h1 className="text-center text-4xl font-bold">Dashboard</h1>
            </>
        );
    }
};

export default Dashboard;
