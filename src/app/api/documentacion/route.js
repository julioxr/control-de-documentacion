import { NextResponse } from "next/server";
import { pool } from "../../../../database/db";

export async function POST(request) {
    const {
        id,
        interlocutor_id,
        documentacion,
        inicio_vigencia,
        fin_vigencia,
        nombre_archivo,
        archivo,
    } = await request.json();
    try {
        const query = `INSERT INTO documentacion VALUES (?,?,?,?,?,?,?)`;
        const values = [
            id,
            interlocutor_id,
            documentacion,
            inicio_vigencia,
            fin_vigencia,
            nombre_archivo,
            archivo,
        ];

        const [documentationSended] = await pool.query(query, values);
        return NextResponse.json([documentationSended]);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
