import NavigationDocumentation from "@/components/documentation/NavigationDocumentation";
import SearchDocumentation from "@/components/documentation/SearchDocumentation";
import TableDocumentation from "@/components/documentation/TableDocumentation";

const MainDocumentation = () => {
    return (
        <main className="flex flex-col items-center">
            <h1 className="text-center text-4xl font-bold">
                Historial de actualizaciones
            </h1>
            <SearchDocumentation />
            <TableDocumentation />
            <NavigationDocumentation />
        </main>
    );
};

export default MainDocumentation;
