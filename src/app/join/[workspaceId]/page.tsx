"use client";

import Image from "../../../../node_modules/next/image";
import VerificationInput from 'react-verification-input';

const JoinPage = () => {
    return (
        <div className="h-full flex flex-col gap-y-8 items-center justify-center bg-white p-8 rounded-lg shadow-sm">
            <Image src="/next.svg" width={60} height="60" alt="Logo"/>
            <div className="flex flex-col gap-y-4 items-center justify-center max-w-md">
                <div className="flex flex-col gap-y-2 items-center justify-center">
                    <h1 className="text-2xl font-bold">
                        Join workspace
                    </h1>
                    <p className="text-md text-muted-foreground">
                        Enter the workspace code to join
                    </p>
                </div>
                <VerificationInput />
            </div>
        </div>
    );
}

export default JoinPage;