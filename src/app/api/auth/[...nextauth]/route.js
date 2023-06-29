import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { pool } from "../../../../../database/db";
import { redirect } from "next/dist/server/api-utils";

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

                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user[0].password
                        );

                        if (isPasswordCorrect) {
                            return user[0];
                        } else {
                            throw new Error("Credenciales erroneas!");
                        }
                    } else {
                        throw new Error("Usuario no encontrado!");
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
        error: "/register",
    },
});

export { handler as GET, handler as POST };
