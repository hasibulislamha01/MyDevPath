import NextAuth from "next-auth"
import { handlers } from "../../../../../auth" // Referring to the auth.ts we just created
import Google from "next-auth/providers/google"
export const { GET, POST } = handlers

export default NextAuth({
    providers: [
        Google
    ]
})