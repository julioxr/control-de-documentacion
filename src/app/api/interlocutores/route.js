import { NextResponse } from "next/server";
import { pool } from "../../../../database/db";

export async function GET(request) {
    try {
        const query = "SELECT * FROM `interlocutores`";
        const [tipo_interlocutores] = await pool.query(query);
        return NextResponse.json(tipo_interlocutores);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const { id_interlocutor, tipo_interlocutor, nombre, dni, fecha_alta } =
            await request.json();
        const query = `INSERT INTO interlocutores (id_interlocutor, tipo_interlocutor, nombre, dni, fecha_alta) VALUES (?, ?, ?, ?, ?)`;
        const values = [
            id_interlocutor,
            tipo_interlocutor,
            nombre,
            dni,
            fecha_alta,
        ];

        const [interlocutores] = await pool.query(query, values);
        return NextResponse.json(interlocutores);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// Parece que aun no anda el DELETE en esta version da error "Unexpected end of JSON input"

// export async function DELETE(request) {
//     try {
//         const { id_interlocutor } = await request.json();
//         console.log(id_interlocutor);

//         // const query = `DELETE FROM interlocutores WHERE id_interlocutor = ?`;
//         // const values = [id_interlocutor];
//         // const [interlocutorBorrado] = await pool.query(query, values);
//         return NextResponse.json(id_interlocutor);
//     } catch (error) {
//         console.log(error);
//         // return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }

// if (!id_interlocutor) {
//     return NextResponse.json(
//         { error: "ID de interlocutor no proporcionado" },
//         { status: 400 }
//     );
// }
