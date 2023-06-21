"use client";
import { useSession } from "next-auth/react";

const Expiration = () => {
    const session = useSession();

    if (session.status === "unauthenticated") return <h1>Acceso denegado</h1>;

    return (
        <>
            <h1 className="text-center text-4xl font-bold">Vencimientos</h1>
        </>
    );
};

export default Expiration;
