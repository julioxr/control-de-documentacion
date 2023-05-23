import { NextResponse } from "next/server";
import { pool } from "../../../../database/db";

const query =
    "SELECT i.id_interlocutor, ti.tipo, i.nombre, i.dni, td.nombre_documentacion, d.inicio_vigencia, d.fin_vigencia, d.nombre_archivo, d.archivo FROM interlocutores AS i INNER JOIN tipos_interlocutores AS ti ON i.tipo_interlocutor = ti.id_interlocutores INNER JOIN documentacion AS d ON i.id_interlocutor = d.interlocutor_id INNER JOIN tipos_documentacion AS td ON d.documentacion = td.id_documentacion;";

export async function GET(request) {
    try {
        const [dataHistory] = await pool.query(query);
        return NextResponse.json(dataHistory);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
