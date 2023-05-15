export async function getData() {
    try {
        const res = await fetch(`${process.env.BASE_URL_API}/api/data`, {
            cache: "no-store",
        });
        return res.json();
        // aca en vez de retornar puedo llevar la data a un provider
    } catch (error) {
        console.log(error);
        return null;
    }
}
