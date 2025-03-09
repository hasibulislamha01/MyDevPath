
import { signIn, auth } from "../../auth"
import SignOut from "./Navbar/signOut"

export default async function SignIn() {
  const sesssion = await auth()
  const user = sesssion?.user
  console.log(sesssion)
  console.log(user)

  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      {
        user ?
          <SignOut />
          :
          <button type="submit">Signin with Google</button>
      }
    </form>
  )
} 