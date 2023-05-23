export async function getData() {
    try {
        const req = await fetch(
            `${process.env.BASE_URL_API}/api/documentacion`,
            {
                cache: "no-store",
            }
        );
        return req.json();
        // aca en vez de retornar puedo llevar la data a un provider
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
