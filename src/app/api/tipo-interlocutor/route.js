import { NextResponse } from "next/server";
import { pool } from "../../../../database/db";

const query = "SELECT * FROM `tipos_interlocutores`";

export async function GET(request) {
    try {
        const [tiposInterlocutores] = await pool.query(query);
        return NextResponse.json(tiposInterlocutores);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
