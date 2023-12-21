import Head from 'next/head'
import {SignUpForm} from "@/components/widgets/SignUpForm";
import {ParticlesLayout} from "@/components/layouts/ParticlesLayout";

export default function SignUp() {
    return (
        <>
            <Head>
                <title>Etu - Sign Up</title>
            </Head>

            <ParticlesLayout>
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img className="mx-auto h-12 w-auto"
                         src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                         alt="Workflow"/>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-indigo-500">
                        Sign In to your account
                    </h2>
                </div>

                <SignUpForm/>
            </ParticlesLayout>
        </>
    )
}
