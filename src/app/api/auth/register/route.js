import { NextResponse } from "next/server";
import { pool } from "../../../../../database/db";
import bcrypt from "bcryptjs";

const query = `INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)`;

export const POST = async (request) => {
    const { name, email, password } = await request.json();

    const hashedPassword = await bcrypt.hash(password, 5);
    const values = [name, email, hashedPassword];

    try {
        const [userCreated] = await pool.query(query, values);

        return NextResponse.json("user created", {
            status: 201,
        });
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,
        });
    }
};
