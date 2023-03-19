import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

import { authOptions } from '../../../../pages/api/auth/[...nextauth]'

export async function GET() {
    const session = await getServerSession(authOptions)
    if (!session) {
        return NextResponse.json({ message: 'You must be logged in.' })
    }
    return NextResponse.json({
        message: 'Success',
    })
}
