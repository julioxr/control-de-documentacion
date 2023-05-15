import React from "react";

const BodyTable = ({
    id,
    interlocutor,
    nombre,
    dni,
    documentacion,
    inicio,
    fin,
    status,
}) => {
    return (
        <tr key={id} className="border-b bg-white hover:bg-gray-50">
            <td className="px-6 py-4">
                <span>{interlocutor}</span>
            </td>
            <td>
                <span>{nombre}</span>
            </td>
            <td className="px-6 py-4">
                <span>{dni}</span>
            </td>
            <td>
                <span>{documentacion}</span>
            </td>
            <td className="px-6 py-4">
                <span>{inicio}</span>
            </td>
            <td className="px-6 py-4">
                <span>{fin}</span>
            </td>
            <td className="flex items-center px-6 py-4">
                <div
                    className={`mr-2 h-2.5 w-2.5 rounded-full ${
                        status == "aprobado" ? "bg-green-500" : "bg-red-500"
                    }`}
                ></div>
                <span>{status}</span>
            </td>
            <td className="gap-4 px-6 py-4">
                <a
                    href="#"
                    className="font-medium text-red-600 hover:underline"
                >
                    Eliminar
                </a>
            </td>
            <td className=" gap-4 px-6 py-4">
                <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                >
                    Adjuntar
                </a>
            </td>
            <td className=" gap-4 px-6 py-4">
                <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                >
                    Enviar
                </a>
            </td>
        </tr>
    );
};

export default BodyTable;
