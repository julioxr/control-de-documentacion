import { createPool } from "mysql2/promise";

const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DB_PASSWORD,
    // port: process.env.PORT,
    database: process.env.DB_NAME,
    // ssl: {
    //     rejectUnauthorized: false,
    // },
});

export { pool };
