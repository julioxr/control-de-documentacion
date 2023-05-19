import Image from "next/image";
import BodyTable from "@/components/table/BodyTable";
import { getData } from "../../lib/get-data";

export default async function Home() {
    const documentacion = await getData();
    return (
        <main className="flex flex-col items-center">
            <h1 className="text-center text-4xl font-bold">
                Historial de actualizaciones
            </h1>
            {/* Seccion tabla */}
            <div className="bg-white py-8">
                <label htmlFor="table-search" className="sr-only">
                    Search
                </label>
                <div className="relative mt-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                            className="h-5 w-5 text-gray-500"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="table-search"
                        className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Buscar"
                    />
                </div>
            </div>
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
                        <th className="px-6 py-3 text-center" colSpan={3}>
                            <span>Acción</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {documentacion.slice(0, 10).map((dato) => (
                        <BodyTable {...dato} />
                    ))}
                </tbody>
            </table>
            <nav
                className="flex w-full max-w-2xl items-center justify-between pt-4"
                aria-label="Table navigation"
            >
                <span className="text-sm font-normal text-gray-500">
                    Mostrando{" "}
                    <span className="font-semibold text-gray-900">1-10</span> de{" "}
                    <span className="font-semibold text-gray-900">1000</span>
                </span>
                <ul className="inline-flex items-center -space-x-px">
                    <li>
                        <a
                            href="#"
                            className="ml-0 block rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <span className="sr-only">Previous</span>
                            <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            1
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            2
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            aria-current="page"
                            className="z-10 border border-blue-300 bg-blue-50 px-3 py-2 leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700"
                        >
                            3
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            ...
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            100
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <span className="sr-only">Next</span>
                            <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </main>
    );
}
