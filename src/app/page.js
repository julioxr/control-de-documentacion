import MainDocumentation from "@/components/documentation/MainDocumentation";
import Login from "@/components/login/Login";

export default async function Home() {
    // En este archivo deberia ir el login, si logea va a ver main documentation, sino va a ver el componente de login
    return (
        <>
            <Login />
            {/* <MainDocumentation /> */}
        </>
    );
}
