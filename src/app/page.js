import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <h1 className="text-center text-6xl font-bold">
                Actualizaciones realizadas
            </h1>
            {/* Seccion tabla */}
            <table className="mt-12 min-w-fit text-center">
                <thead>
                    <tr>
                        <th className="px-8">Interlocutor</th>
                        <th className="px-8">DNI / Placa</th>
                        <th className="px-8">Documentación</th>
                        <th className="px-8">Fecha de inicio</th>
                        <th className="px-8">Fecha de fin</th>
                        <th className="px-8">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Julio Roja</td>
                        <td>33365421</td>
                        <td>Linti</td>
                        <td>12/05/2023</td>
                        <td>12/06/2023</td>
                    </tr>
                    <tr>
                        <td>Camion</td>
                        <td>ABC123</td>
                        <td>Pago de poliza</td>
                        <td>02/04/2023</td>
                        <td>02/06/2023</td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}
