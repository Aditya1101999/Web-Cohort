import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res= await prisma.user.create({
    data:{
        username,
        password,
        firstName,
        lastName
    },
    //what to show after creating this
    select:{
        id:true,
        password:false
    }
  })
  console.log(res)
}

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { username },
    data: {
      firstName,
      lastName
    }
  });
  console.log(res);
}

async function getUser(username: string) {
    const user = await prisma.user.findFirst({
      where: {
          username: username
      }
    })
    console.log(user);
  }
  



insertUser("adityaa","hehee","adii","kkk")
updateUser("admin1", {
    firstName: "new name",
    lastName: "singh"
})
getUser("admin1");

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




