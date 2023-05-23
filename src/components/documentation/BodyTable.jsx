import React from "react";

const BodyTable = ({
    id,
    tipo,
    nombre,
    dni,
    nombre_documentacion,
    inicio_vigencia,
    fin_vigencia,
    status,
}) => {
    return (
        <tr key={id} className="border-b bg-white hover:bg-gray-50">
            <td className="px-6 py-4">
                <span>{tipo}</span>
            </td>
            <td>
                <span>{nombre}</span>
            </td>
            <td className="px-6 py-4">
                <span>{dni}</span>
            </td>
            <td>
                <span>{nombre_documentacion}</span>
            </td>
            <td className="px-6 py-4">
                <span>{inicio_vigencia.slice(0, 10)}</span>
            </td>
            <td className="px-6 py-4">
                <span>{fin_vigencia.slice(0, 10)}</span>
            </td>
            <td className="flex items-center px-6 py-4">
                <div
                    className={`mr-2 h-2.5 w-2.5 rounded-full ${
                        status == "aprobado" ? "bg-green-500" : "bg-red-500"
                    }`}
                ></div>
                <span>Enviado</span>
            </td>
            {/* <td className="gap-4 px-6 py-4">
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
            </td> */}
        </tr>
    );
};

export default BodyTable;
