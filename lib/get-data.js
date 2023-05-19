export async function getData() {
    try {
        const req = await fetch(`${process.env.BASE_URL_API}/api/data`, {
            cache: "no-store",
        });
        return req.json();
        // aca en vez de retornar puedo llevar la data a un provider
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getTipoInterlocutor() {
    try {
        const req = await fetch(
            `${process.env.BASE_URL_API}/api/tipo-interlocutor`,
            {
                cache: "no-store",
            }
        );
    } catch (error) {
        console.log(error);
        return null;
    }
}
