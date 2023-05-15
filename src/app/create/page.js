import React from "react";

const page = () => {
    return (
        <section className="container mx-auto max-w-5xl">
            <h1 className="mb-8 text-center text-6xl font-bold">Alta</h1>
            {/* Aca pongo un h-auto mientras luego agrego contenido*/}
            <div className="flex h-[calc(100vh-240px)] items-center justify-center">
                <div className="flex h-full w-1/4 flex-col items-center justify-center gap-4 rounded-l-2xl bg-hdgray/10">
                    <button className="h-10 w-32 rounded-sm bg-hdgray text-white">
                        Empresa
                    </button>
                    <button className="h-10 w-32 rounded-sm bg-hdgray text-white">
                        Conductor
                    </button>
                    <button className="h-10 w-32 rounded-sm bg-hdgray text-white">
                        Camión
                    </button>
                    <button className="h-10 w-32 rounded-sm bg-hdgray text-white">
                        Acoplado
                    </button>
                </div>
                <form
                    action=""
                    className="flex h-full w-3/4 flex-col items-center justify-center gap-4 rounded-r-2xl bg-hbrightgray/10 text-xl"
                >
                    <div className="flex flex-col bg-red-300/10 p-12">
                        <label htmlFor="">Nombre y apellido</label>
                        <input type="text" className="w-40" placeholder="" />
                        <label htmlFor="">DNI</label>
                        <input type="text" className="w-40" placeholder="" />
                    </div>
                    <button
                        type="submit"
                        className="h-10 w-32 rounded-sm bg-hdgray text-white"
                    >
                        Guardar
                    </button>
                </form>
                {/* <div className="flex h-full w-3/4 items-center justify-center rounded-r-2xl bg-hbrightgray/10 text-xl font-medium">
                    <h2>Seleccione una opción para dar de alta</h2>
                </div> */}
            </div>
        </section>
    );
};

export default page;
