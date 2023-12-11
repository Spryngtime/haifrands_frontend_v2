'use client'
import {StytchProvider} from "@stytch/nextjs";
import {createStytchUIClient} from "@stytch/nextjs/ui";

const stytch = createStytchUIClient("public-token-test-4991da25-43df-44b0-806a-6cdbdf711d5c");
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
