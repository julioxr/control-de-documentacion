import React from "react";
import { getTiposInterlocutores } from "../../../lib/get-data";

const page = async () => {
    const tiposInterlocutores = await getTiposInterlocutores();
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

export default page;
