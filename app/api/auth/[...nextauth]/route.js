import NextAuth from "next-auth/next";


export const authOptions = {
    providers: [
    {
        id: "descope",
        name: "Descope",
        type: "oauth",
        wellKnown: `https://api.descope.com/P2qi2swVMZeJ3KHpN7i3LMNLlArE/.well-known/openid-configuration`,
        authorization: { params: { scope: "openid email profile" } },
        idToken: true,
        clientId: 'P2qi2swVMZeJ3KHpN7i3LMNLlArE',
        clientSecret: "<Descope Access Key>",
        checks: ["pkce", "state"],
        profile(profile) {
            return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                image: profile.picture,
            }
        },
    }],
    secret: process.env.SECRET
}  


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
