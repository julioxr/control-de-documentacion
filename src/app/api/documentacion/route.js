import { NextResponse } from "next/server";
import { pool } from "../../../../database/db";

const query =
    "SELECT interlocutores.id, tipos_interlocutores.tipo, interlocutores.nombre, interlocutores.dni FROM interlocutores JOIN tipos_interlocutores ON interlocutores.tipo_interlocutor = tipos_interlocutores.id";

const query2 =
    "SELECT interlocutores.nombre, interlocutores.dni, tipos_documentacion.nombre_documentacion, documentacion.inicio_vigencia, documentacion.fin_vigencia, documentacion.nombre_archivo, documentacion.archivo FROM interlocutores INNER JOIN documentacion ON interlocutores.id_interlocutor = documentacion.interlocutor_id INNER JOIN tipos_documentacion ON documentacion.documentacion = tipos_documentacion.id_documentacion;";

const query3 =
    "SELECT i.nombre, i.dni, td.nombre_documentacion, d.inicio_vigencia, d.fin_vigencia, d.nombre_archivo, d.archivo FROM interlocutores AS i INNER JOIN documentacion AS d ON i.id_interlocutor = d.interlocutor_id INNER JOIN tipos_documentacion AS td ON d.documentacion = td.id_documentacion;";

export async function GET(request) {
    try {
        const [dataDocumentos] = await pool.query(query2);
        return NextResponse.json(dataDocumentos);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
