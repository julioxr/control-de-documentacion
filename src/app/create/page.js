"use client";
import { getTiposInterlocutores } from "../../../lib/get-data";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Create = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [tiposInterlocutores, setTiposInterlocutores] = useState([]);
    const [name, setName] = useState("");
    const [dni, setDni] = useState("");
    const [selectedOption, setSelectedOption] = useState("empty");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const fetchTiposInterlocutores = async () => {
            try {
                const response = await fetch(
                    `/api/tipo-interlocutor`, // Desde el cliente no se puede usar process.env.BASE_URL_API a menos que se haga visible la url
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

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/");
            return;
        }
    }, [status]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fetchCreateInterlocutor = async () => {
            try {
                const response = await fetch("/api/interlocutores", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        tipo_interlocutor: selectedOption,
                        nombre: name,
                        dni: dni,
                        fecha_alta: new Date(),
                    }),
                });

                if (response.status === 200) {
                    setSuccess(true);
                }
            } catch (error) {
                console.log("Error de red:", error);
            }
        };
        fetchCreateInterlocutor();
    };

    if (status === "authenticated") {
        return (
            <section className="container mx-auto max-w-5xl">
                <h1 className="mb-8 text-center text-4xl font-bold">Alta</h1>

                <div className="flex w-full justify-center">
                    <form className="flex gap-4" onSubmit={handleSubmit}>
                        <select
                            name=""
                            className="h-12 rounded border pl-4"
                            onChange={(e) => setSelectedOption(e.target.value)}
                            value={selectedOption}
                        >
                            <option id="0" value="empty">
                                Seleccione una opcion
                            </option>
                            {tiposInterlocutores.map(
                                ({ id_interlocutores, tipo }) => {
                                    return (
                                        <option
                                            key={id_interlocutores}
                                            value={id_interlocutores}
                                        >
                                            {tipo.charAt(0).toUpperCase() +
                                                tipo.slice(1)}
                                        </option>
                                    );
                                }
                            )}
                        </select>
                        <input
                            type="text"
                            placeholder="Nombre / Placa"
                            className="h-12 rounded border pl-4 focus:outline-gray-500"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <input
                            type="text"
                            placeholder="DNI / Patente"
                            className="h-12 rounded border pl-4 focus:outline-gray-500"
                            onChange={(e) => setDni(e.target.value)}
                            value={dni}
                        />
                        <button
                            type="submit"
                            className="rounded bg-hdarkblue px-6 py-2 text-white"
                        >
                            Crear
                        </button>
                    </form>
                </div>
                {success && (
                    <p>{`Interlocutor ${name} creado correctamente`}</p>
                )}
            </section>
        );
    }
};

export default Create;
