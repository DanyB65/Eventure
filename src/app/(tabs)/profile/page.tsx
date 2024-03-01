import Header from "@/app/compoents/header";
import { sql } from "@vercel/postgres";

async function getUsers() {
  const res = await sql`SELECT * FROM users;`;
  return res.rows
}

export default async function Profile({}) {
  const userinfo = await getUsers();
  // console.log(userinfo)
  return (
    <>
      <Header />
      {/* <div>{userinfo}</div> */}
      {userinfo.map((user) => (
        <div key={user.userid} style={{ color: 'black' }}>
          <h3 style={{color: 'black'}}>{user.firstname}</h3>
          <h3 style={{color: 'black'}}>{user.lastname}</h3>
        </div>
      ))}
    </>
  );
}


// `import { sql } from "@vercel/postgres";

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
// }`