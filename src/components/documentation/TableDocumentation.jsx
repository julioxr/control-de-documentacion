import BodyTable from "@/components/documentation/BodyTable";
import { getData } from "../../../lib/get-data";

const TableDocumentation = async () => {
    const documentacion = await getData();

    return (
        <table className="w-fit text-left text-sm text-hdgray">
            <thead className="bg-gray-50 text-xs uppercase text-htext">
                <tr className="">
                    <th className="px-6 py-3">
                        <span>Interlocutor</span>
                        <span className="pl-2 text-xl font-bold">↓</span>
                    </th>
                    <th className="px-6 py-3">
                        <span>Nombre / Marca</span>
                    </th>
                    <th className="px-6 py-3">
                        <span>DNI / Placa</span>
                    </th>
                    <th className="px-6 py-3">
                        <span>Documentación</span>
                    </th>
                    <th className="px-6 py-3">
                        <span>Fecha de inicio</span>
                    </th>
                    <th className="px-6 py-3">
                        <span>Fecha de fin</span>
                    </th>
                    <th className="px-6 py-3">
                        <span>Status</span>
                    </th>
                    {/* <th className="px-6 py-3 text-center" colSpan={3}>
                        <span>Acción</span>
                    </th> */}
                </tr>
            </thead>
            <tbody>
                {documentacion.slice(0, 10).map((dato) => (
                    <BodyTable {...dato} />
                ))}
            </tbody>
        </table>
    );
};

export default TableDocumentation;
