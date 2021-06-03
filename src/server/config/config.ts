// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Puerto
process.env.PORT = '5000';

//Base de datos
let urlDB: string;
let userDB: string;
let passDB: string;

/* if (process.env.NODE_ENV === 'dev') { */
    urlDB = '127.0.0.1';
    userDB = 'admin';
    passDB = 'admin';
/* } else {
    urlDB = process.env.MYSQL_URL!;
    userDB = process.env.MYSQL_USER!;
    passDB = process.env.MYSQL_PASS!;
}; */

process.env.URLDB = urlDB;
process.env.USERDB = userDB;
process.env.PASSDB = passDB;
