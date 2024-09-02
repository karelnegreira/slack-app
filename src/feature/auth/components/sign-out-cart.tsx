import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { SignInFlow } from "../types"
import { useState } from "react"

import { useAuthActions } from "@convex-dev/auth/react"
import { TriangleAlert } from "lucide-react"
import { signOut } from "../../../../convex/auth"

interface SignUpProps {
  setState: (state: SignInFlow) => void;
}

const SignUpCart = ({setState}: SignUpProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pending, setPending] = useState(false);
    const [error, setError] = useState("");

    const {signIn} = useAuthActions();

     const onPasswordSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return;
        }

        setPending(true);
        signIn("password", {name, email, password, flow: "signUp"})
            .catch(() => {
                setError("Something went wrong")
            })
            .finally(() => {
                setPending(false);
            })
     }

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
        {!!error && (
            <div className="bg-destructive/15 p-3 flex items-center gap-x-2 text-sm text-destructive mb-6">
                <TriangleAlert className="size-4"/>
                <p>{error}</p>
            </div>
        )}
        <CardContent className="space-y-5 px-0 pb-0">
            <form onSubmit={onPasswordSignUp} className="space-y-2.5">
            <Input disabled={pending} value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" required />
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