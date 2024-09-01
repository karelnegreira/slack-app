import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { SignInFlow } from "../types"
import { useState } from "react"

import { useAuthActions } from "@convex-dev/auth/react"

interface SignUpProps {
  setState: (state: SignInFlow) => void;
}

const SignUpCart = ({setState}: SignUpProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pending, setPending] = useState(false);

    const {signIn} = useAuthActions();

    const onProvider = (value: "github" | "google") => {
        setPending(true);
        signIn(value)
        .finally (() => {
            setPending(false);
        })
    };

  return (
    <Card className="w-full h-full p-8">
        <CardHeader className="px-0 pt-0">
            <CardTitle>
                Sign in to continue
            </CardTitle>
            <CardDescription>
                Use your email or another service to log in
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5 px-0 pb-0">
            <form className="space-y-2.5">
                <Input disabled={pending} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required />
                <Input disabled={pending} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" required />
                <Input disabled={pending} value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} placeholder="Confirm password" type="password" required />
                <Button type="submit" className="w-full" size="lg" disabled={false}>
                    Continue
                </Button>
            </form>
            <Separator />
            <div className="flex flex-col gap-y-2">
                
                <Button disabled={pending} onClick={() => onProvider("google")} variant="outline" size="lg"  className="w-full relative">
                    <FcGoogle className="size-5 absolute top-2.5 left-2.5"/>
                        Continue with Google
                </Button>

                <Button disabled={pending} onClick={() => onProvider("github")} variant="outline" size="lg"  className="w-full relative">
                    <FaGithub className="size-5 absolute top-2.5 left-2.5"/>
                        Continue with Github
                </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
                Already have an account? <span onClick={() => setState("signIn")} className="text-sky-700 hover:underline cursor-pointer">Sign in</span>
            </p>
        </CardContent>
    </Card>
  )
}

export default SignUpCart