// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Puerto
process.env.PORT = process.env.PORT || '3000';

//Base de datos
let urlDB: string;
let userDB: string;
let passDB: string;

/* if (process.env.NODE_ENV === 'dev') { */
    urlDB = '134.122.5.92';
    userDB = 'admin';
    passDB = '@Dm|n__|23456';
/* } else {
    urlDB = process.env.MYSQL_URL!;
    userDB = process.env.MYSQL_USER!;
    passDB = process.env.MYSQL_PASS!;
}; */

process.env.URLDB = urlDB;
process.env.USERDB = userDB;
process.env.PASSDB = passDB;