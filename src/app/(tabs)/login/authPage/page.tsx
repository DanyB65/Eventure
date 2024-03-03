// 'use client'
// import { FormEvent } from 'react'
// import { useRouter } from 'next/navigation'
// import {signIn} from 'next-auth/react'
// export default function LoginPage() {
//   const router = useRouter()
 
//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault()
 
//     const formData = new FormData(event.currentTarget)
//     const email = formData.get('email')
//     const password = formData.get('password')
//     const response = await signIn('credentials', {email,password,redirect:false})
//     console.log(response)
//     // console.log(email,password)
//     // const response = await fetch('../api/auth/email', {
//     //   method: 'POST',
//     //   body: JSON.stringify({ email, password }),
//     // })
//     // // const response = await fetch("/api/post", {
//     // //     method: "POST",
//     // //     body: JSON.stringify(data),
//     // //   });
//     // //   return response.json();
//     // // };



//     // if (response.ok) {
//     //   router.push('/profile')
//     // } else {
//     //   // Handle errors
//     // }
//   }
 
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" name="email" placeholder="Email" required />
//       <input type="password" name="password" placeholder="Password" required />
//       <button type="submit">Login</button>
//     </form>
//   )
// }
