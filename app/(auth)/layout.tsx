'use client'
import {StytchProvider} from "@stytch/nextjs";
import {createStytchUIClient} from "@stytch/nextjs/ui";

const stytchOptions = {
    cookieOptions: {
        availableToSubdomains: true,
        domain: ".usephortal.com",
    }}

const stytch = createStytchUIClient(process.env.NEXT_PUBLIC_STYTCH_PUBLIC || "", stytchOptions);

import NiceModal from '@ebay/nice-modal-react';


export default function AuthLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <main className="grow">
            <NiceModal.Provider>
                <StytchProvider stytch={stytch}>
                    {children}
                </StytchProvider>
            </NiceModal.Provider>

        </main>
    )
}
