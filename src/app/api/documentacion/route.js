import { NextResponse } from "next/server";
import { pool } from "../../../../database/db";

export async function GET(request) {
    const [dataDocumentos] = await pool.query("SELECT * FROM`documentos`");
    return NextResponse.json(dataDocumentos);
}
