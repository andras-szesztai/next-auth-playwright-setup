import { SignOut, SignIn } from './actions'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../pages/api/auth/[...nextauth]'

export default async function Header() {
    const session = await getServerSession(authOptions)
    return (
        <header>
            <div>
                {session?.user ? (
                    <>
                        {session.user.image && (
                            <span
                                style={{
                                    backgroundImage: `url('${session.user.image}')`,
                                }}
                            />
                        )}
                        <span>
                            <small>Signed in as</small>
                            <br />
                            <strong>
                                {session.user.email ?? session.user.name}
                            </strong>
                        </span>
                        <SignOut />
                    </>
                ) : (
                    <>
                        <span>You are not signed in</span>
                        <SignIn />
                    </>
                )}
            </div>
        </header>
    )
}
