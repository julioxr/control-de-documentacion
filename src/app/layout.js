import "./globals.css";
import MainNavbar from "@/components/navbar/MainNavbar";
import AuthProvider from "@/components/authProvider/AuthProvider";

export const metadata = {
    title: "Control de documentación",
    description:
        "Aplicación para carga y control de documentación para empresas",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="min-h-screen  text-htextalt">
            <body className="overflow-x-hidden bg-[#f4f4f4]">
                <AuthProvider>
                    <MainNavbar />
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
