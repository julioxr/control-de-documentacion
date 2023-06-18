import { NextResponse } from "next/server";
import { pool } from "../../../../../database/db";

const query = `INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)`;

export const POST = async (request) => {
    const { name, email, password } = await request.json();

    const values = [name, email, password];

    try {
        const [userCreated] = await pool.query(query, values);

        return NextResponse.json(userCreated);
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,
        });
    }
};
