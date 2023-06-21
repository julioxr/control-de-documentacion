"use client";
import { getTiposInterlocutores } from "../../../lib/get-data";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Create = () => {
    const [tiposInterlocutores, setTiposInterlocutores] = useState([]);
    const session = useSession();
    const router = useRouter();

    if (session.status === "unauthenticated") router.push("/");

    useEffect(() => {
        const fetchTiposInterlocutores = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/api/tipo-interlocutor`, // Desde el cliente no se puede usar process.env.BASE_URL_API a menos que se haga visible la url
                    {
                        cache: "no-store",
                    }
                );
                const data = await response.json();
                setTiposInterlocutores(data);
            } catch (error) {
                console.log("Error de red:", error);
            }
        };
        fetchTiposInterlocutores();
    }, []);

    return (
        <section className="container mx-auto max-w-5xl">
            <h1 className="mb-8 text-center text-4xl font-bold">Alta</h1>
            <select name="" id="" className="">
                <option id="0" value="empty">
                    Seleccione una opcion
                </option>
                {tiposInterlocutores.map(({ id_interlocutores, tipo }) => {
                    return (
                        <option
                            id={id_interlocutores}
                            key={id_interlocutores}
                            value={tipo}
                        >
                            {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                        </option>
                    );
                })}
            </select>
            <input type="text" placeholder="Nombre / Placa" />
            <input type="text" placeholder="DNI / Patente" />
            <button type="submit">Crear</button>
        </section>
    );
};

export default Create;
