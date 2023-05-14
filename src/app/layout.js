import "./globals.css";
import MainNavbar from "@/components/navbar/MainNavbar";

export const metadata = {
    title: "Control de documentación",
    description:
        "Aplicación para carga y control de documentación para empresas",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="min-h-screen  text-htextalt">
            <body>
                <MainNavbar />
                {children}
            </body>
        </html>
    );
}
