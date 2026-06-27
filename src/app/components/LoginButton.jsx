// 'use client'
// import { signIn, signOut, useSession } from 'next-auth/react'

// export default function LoginButton() {

//     const { data: session } = useSession()
//     console.log(session);

//     if (session) return <div>
//         <h2>Signed in as {session?.user?.email}</h2>
//         <button onClick={() => signOut()}>Sign Out</button>
//     </div>

//     return (
//         <div>
//             <h2>Not Signed in ?</h2>
//             <button onClick={() => signIn()}>Login</button>
//         </div>
//     )
// }
'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

export default function LoginButton() {

  return (
    <div>
      <button className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-500/20" onClick={() => signIn()}>Login</button>
    </div>
  )
}
