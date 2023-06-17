export async function getUltimosRegistros() {
    try {
        const req = await fetch(
            `${process.env.BASE_URL_API}/api/ultimos-registros`,
            {
                cache: "no-store",
            }
        );
        const res = await req.json();
        return res;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getTiposInterlocutores() {
    try {
        const req = await fetch(
            `${process.env.BASE_URL_API}/api/tipo-interlocutor`,
            {
                cache: "no-store",
            }
        );
        return req.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}
