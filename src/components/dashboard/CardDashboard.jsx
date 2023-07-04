import React from "react";
import Link from "next/link";

const CardDashboard = ({ title, data, bgColor, id, url }) => {
    console.log(bgColor);
    return (
        <Link href={url}>
            <div
                key={id}
                className={`flex h-56 w-56 cursor-pointer flex-col items-center justify-center gap-2 rounded text-white shadow-md ${bgColor}`}
            >
                <h2 className="text-2xl font-semibold">{title}</h2>
                <span className="text-4xl font-black">{data}</span>
            </div>
        </Link>
    );
};

export default CardDashboard;
