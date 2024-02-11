"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                username,
                password,
                firstName,
                lastName
            },
            //what to show after creating this
            select: {
                id: true,
                password: false
            }
        });
        console.log(res);
    });
}
function updateUser(username, { firstName, lastName }) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
insertUser("adityaa", "hehee", "adii", "kkk");
// //create a users table in db
// import { Client } from "pg"
// const client=new Client({
//     host: 'localhost',
//     port:5432,
//     database:'postgres',
//     user: 'postgres',
//     password: 'mysecretpassword',
// })
// async function createUsersTable(){
//     await client.connect()
//     const result=await client.query(`
//     CREATE TABLE users (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(50) UNIQUE NOT NULL,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//     );`)
//     console.log(result)
// }
// async function insertData(username: string, email: string, password: string) {
//     const client = new Client({
//       host: 'localhost',
//       port: 5432,
//       database: 'postgres',
//       user: 'postgres',
//       password: 'mysecretpassword',
//     });
//     try {
//       await client.connect(); // Ensure client connection is established
//     //   const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
//     //   const res = await client.query(insertQuery);
//     const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
//     const values = [username, email, password];
//     const res = await client.query(insertQuery, values);
//       console.log('Insertion success:', res); // Output insertion result
//     } catch (err) {
//       console.error('Error during the insertion:', err);
//     } finally {
//       await client.end(); // Close the client connection
//     }
//   }
//   async function getUser(email: string) {
//     const client = new Client({
//         host: 'localhost',
//         port: 5432,
//         database: 'postgres',
//         user: 'postgres',
//         password: 'mysecretpassword',
//     });
//   try {
//     await client.connect(); // Ensure client connection is established
//     const query = 'SELECT * FROM users WHERE email = $1';
//     const values = [email];
//     const result = await client.query(query, values);
//     if (result.rows.length > 0) {
//       console.log('User found:', result.rows[0]); // Output user data
//       return result.rows[0]; // Return the user data
//     } else {
//       console.log('No user found with the given email.');
//       return null; // Return null if no user was found
//     }
//   } catch (err) {
//     console.error('Error during fetching user:', err);
//     throw err; // Rethrow or handle error appropriately
//   } finally {
//     await client.end(); // Close the client connection
//   }
// }
//   createUsersTable()
//   insertData('username5', 'user5@example.com', 'user_password').catch(console.error);
//   getUser('user5@example.com').catch(console.error);
