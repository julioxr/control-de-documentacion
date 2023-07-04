"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import MainDashboard from "@/components/dashboard/MainDashboard";

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
                <MainDashboard />
            </>
        );
    }
};

export default Dashboard;
