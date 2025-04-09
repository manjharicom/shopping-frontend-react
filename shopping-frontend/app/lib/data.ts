import sql from 'mssql'

export const config:sql.config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER!, // e.g., 'localhost' or 'your.database.server'
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT!),
    options: {
      encrypt: true, // Use encryption if required
      trustServerCertificate: true, // Set to true for self-signed certs
    },
};
