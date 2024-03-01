import { sql } from "@vercel/postgres";

export default async function sendLoginInfo(loginInfo) {
  
    try {
        const {firstName, lastName, email, phoneNumber, isBusinessOwner, dateOfBirth, address, bio} = loginInfo;
        await sql`INSERT INTO users (FirstName, LastName, Email, PhoneNumber, IsBusinessOwner, DateOfBirth, Address, Bio) VALUES (${firstName}, ${lastName}, ${email}, ${phoneNumber}, ${isBusinessOwner}, ${dateOfBirth}, ${address}, ${bio})`;
        
        const users = await sql`SELECT * FROM users`;
        
        return users;
    } catch (error) {
        throw error; // Propagate the error
    }
}

// import { sql } from "@vercel/postgres";

// export default async function Cart({ params }) {
//   const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

//   return (
//     <div>
//       {rows.map((row) => (
//         <div key={row.id}>
//           {row.id} - {row.quantity}
//         </div>
//       ))}
//     </div>
//   );
// }