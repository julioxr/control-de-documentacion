"use client";
import NavigationDocumentation from "@/components/documentation/NavigationDocumentation";
import SearchDocumentation from "@/components/documentation/SearchDocumentation";
import TableDocumentation from "@/components/documentation/TableDocumentation";
import { useEffect, useState } from "react";
import { getUltimosRegistros } from "../../../lib/get-data";

const MainDocumentation = () => {
    const [historial, setHistorial] = useState([]);

    useEffect(() => {
        const fetchHistorial = async () => {
            try {
                const req = await fetch(`/api/ultimos-registros`, {
                    cache: "no-store",
                });
                const res = await req.json();
                setHistorial(res);
            } catch (error) {
                console.log(error);
            }
        };

        fetchHistorial();
    }, []);

    return (
        <main className="flex flex-col items-center">
            <h1 className="text-center text-4xl font-bold">
                Historial de actualizaciones
            </h1>
            <SearchDocumentation />
            <TableDocumentation historial={historial} />
            <NavigationDocumentation />
        </main>
    );
};

export default MainDocumentation;
