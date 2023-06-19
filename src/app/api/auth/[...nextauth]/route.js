import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { pool } from "../../../../../database/db";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Email",
            async authorize(credentials) {
                try {
                    const query = `SELECT * FROM usuarios WHERE email = ?`;
                    const values = [credentials.email];

                    const [user] = await pool.query(query, values);

                    console.log(
                        "pass user: " + credentials.password,
                        "hash:" + user[0].password
                    );

                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user[0].password
                        );

                        if (isPasswordCorrect) {
                            console.log("INGRESASTE");
                        } else {
                            console.log("NO INGRESASTE");
                        }
                    } else {
                        console.log("usuario no encontrado");
                    }
                } catch (error) {
                    return newResponse(error.message, {
                        status: 500,
                    });
                }
            },
        }),
    ],
    pages: {
        error: "/",
    },
});

export { handler as GET, handler as POST };
