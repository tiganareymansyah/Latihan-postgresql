import postgresql from "pg";

const { Client } = postgresql;

export const client = new Client({
    host: "db.ojgrbqsjzthxzphlyklm.supabase.co",
    user: "postgres",
    password: "belajarpostgresql",
    database: "postgres"
});

await client.connect();
console.log("Berhasil terhubung");