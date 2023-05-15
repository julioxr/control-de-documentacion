// example
// export async function GET(request) {
//     return new Response(JSON.stringify({ msg: "data del blog" }));
// }
import { NextResponse } from "next/server";
import data from "../../../app/data.json";

export async function GET(request) {
    const apiData = await data;
    return NextResponse.json(apiData);
}
