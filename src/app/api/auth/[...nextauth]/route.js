import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      // Amra credentials e bole disi, amra username r password receive korbo, 
      credentials: {
        email: {label: 'email', type: 'email', placeholder: 'admin@xxx.com'},
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      // Authorize j function ta amra j credentials Ta recieve kortasi, amra input e je username r password Ta dicchi sheta
      async authorize(credentials, req) {
        console.log("[Credentials Auth]", credentials);
        /* [Credentials Auth] {
  csrfToken: '3de06b704d7ae0c23b25ceae47dc1eeb8435ac7af41502f92e23f5d49059df50',
  email: 'admin3@gmail.com',
  username: 'Hridoy',
  password: '123456'
} */

        // Add logic here to look up the user from the credentials supplied
        // Ekhane dummy deta dewa ase, ekhane amra api call kre / database theke query kore dekhte hobe username r pass thik ase kina
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          // 
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
});

export {handler as GET, handler as POST}