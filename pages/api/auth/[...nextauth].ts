import NextAuth, { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions: AuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: 'fbdc0fcf831a07a28c22',
            clientSecret: 'bc1e92327cf9f0537c7c91429f91e47a6565a6a1',
        }),
    ],
}

export default NextAuth(authOptions)
