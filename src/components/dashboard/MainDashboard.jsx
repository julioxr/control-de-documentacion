import React from "react";
import CardDashboard from "./CardDashboard";

const MainDashboard = () => {
    const dashboards = [
        {
            id: 1,
            title: "Pendientes",
            data: 23,
            bgColor: "bg-yellow-500",
            url: "/pending",
        },
        {
            id: 2,
            title: "Aprobadas",
            data: 42,
            bgColor: "bg-green-500",
            url: "/approved",
        },
        {
            id: 3,
            title: "Rechazadas",
            data: "03",
            bgColor: "bg-red-500",
            url: "/rejected",
        },
        {
            id: 4,
            title: "Alta",
            data: 4,
            bgColor: "bg-gray-800",
            url: "/create",
        },
        {
            id: 5,
            title: "Actualizacion",
            data: 5,
            bgColor: "bg-gray-800",
            url: "/update",
        },
        {
            id: 6,
            title: "Vencimientos",
            data: 5,
            bgColor: "bg-gray-800",
            url: "/expiration",
        },
    ];

    return (
        <>
            <h1 className="text-center text-4xl font-bold">Dashboard</h1>

            <section className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-12">
                {dashboards.map(({ title, data, bgColor, id, url }) => (
                    <CardDashboard
                        title={title}
                        data={data}
                        bgColor={bgColor}
                        id={id}
                        url={url}
                    />
                ))}
            </section>
        </>
    );
};

export default MainDashboard;
