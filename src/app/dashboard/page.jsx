"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
    const session = useSession();
    const router = useRouter();

    if (session.status === "unauthenticated") {
        router.push("/");
        return;
    }

    if (session.status === "authenticated") {
        return (
            <>
                <h1 className="text-center text-4xl font-bold">Dashboard</h1>
            </>
        );
    }
};

export default Dashboard;
