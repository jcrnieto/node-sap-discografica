// require('dotenv').config();
// let hdb = require('hdb');
//const xsenv = require("@sap/xsenv");
// xsenv.loadEnv();

// var services = xsenv.getServices({ hana: { name: 'discografica-capcds-db' }}).hana;
// console.log("credenciales",services.host)
// console.log("credenciales",services.port)
// console.log("credenciales",services.user)
// console.log("credenciales",services.password)



// exports.connectDb = () => {
//     return new Promise((resolve, reject) => {
//       let client = hdb.createClient({
//         host     : services.host,
//         port     : services.port,
//         user     : services.user,
//         password : services.password
//       });
      
    //   client.on('error', function (err) {
    //     console.error('Network connection error', err);
    //     reject(err);
    //   });
      
//       client.connect(function (err) {
//         if (err) {
//           console.error('Connect error', err);
//           reject(err);
//         }
//         console.log('Conexión establecida correctamente.');
//         resolve(client);
//       });
//     });
//   };

const xsenv = require("@sap/xsenv");
const { Client } = require('hdb');


exports.connectDb = async () => {

    const hanaCredentials = xsenv.getServices({ hana: { tag: "hana", name: 'discografica-capcds-db' } }).hana;

    const getConnection = new Client(hanaCredentials);

    const connectToDatabase = () => {
        return new Promise((resolve, reject) => {
           getConnection.connect((err) => {
                if (err) {
                    console.error("Error al conectar a la base de datos:", err);
                    reject(err);
                }
                console.log("Conectado a la base de datos SAP HANA Cloud");
                resolve(getConnection);
            });
        });
    }
    await connectToDatabase();
    return getConnection;

}