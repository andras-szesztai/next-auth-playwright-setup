import Header from './Header'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html>
            <head></head>
            <body>
                {/** @ts-expect-error */}
                <Header />
                <main>{children}</main>
            </body>
        </html>
    )
}
