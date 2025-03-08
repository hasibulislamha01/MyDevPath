
import { signIn, auth } from "../../auth"

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
          <button>Sign Out</button>
          :
          <button type="submit">Signin with Google</button>
      }
    </form>
  )
} 