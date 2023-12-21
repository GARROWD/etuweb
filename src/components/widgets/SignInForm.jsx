import React, {useEffect, useState} from 'react';
import {SignInUsernameInput} from "@/components/features/SignInUsernameInput";
import {SignInPasswordInput} from "@/components/features/SignInPasswordInput";
import {Button} from "@/components/shared/ui/Button";
import {Modal} from "@/components/shared/ui/Modal";
import Link from "next/link";
import {USERNAME_INCORRECT} from "@/components/shared/constants/ErrorMessages";

export function SignInForm() {
    const [usernameState, setUsernameState] = useState({value: "", errorMessage: "", isValid: null, showError: false});

    const [passwordState, setPasswordState] = useState({value: "", errorMessage: "", isValid: null, showError: false});

    const [requestError, setRequestError] = useState("");
    const [show, setShow] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if(usernameState.isValid && passwordState.isValid) {
            setFormIsValid(true);
        }
        else {
            setFormIsValid(false);
        }
    }, [usernameState.isValid, passwordState.isValid])

    const signIn = async function() {
        setShow(true);
        try {
            //await SignInService.signIn(usernameState.value, passwordState.value);
            //throw new Error("Error message")
            setSuccess(true);
        } catch(e) {
            if(e.response && e.response.status === 404) {
                setUsernameState(usernameState => ({
                    ...usernameState,
                    errorMessage: USERNAME_INCORRECT,
                    showError: true,
                    isValid: false
                }));
            }
            else {
                setSuccess(false);
                setRequestError(e.message);
            }
        }
    }

    const resetForm = function() {
        setUsernameState(() => ({
            value: "",
            showError: false,
            isValid: null
        }));

        setPasswordState(() => ({
            value: "",
            showError: false,
            isValid: null
        }));

        setSuccess(false);
        setShow(false);
        setFormIsValid(false);
    }

    return (
        <>
            <div className="mt-8 mx-6 sm:mx-auto sm:w-full sm:max-w-sm bg-gray-950 z-10 py-8 px-10 rounded-2xl shadow-glow">
                <form className="space-y-6" action="src/3-widgets#" method="POST">
                    <SignInUsernameInput usernameState={usernameState}
                                   setUsernameState={setUsernameState}/>

                    <SignInPasswordInput passwordState={passwordState}
                                   setPasswordState={setPasswordState}/>

                    <div>
                        <Button
                            className="w-full flex justify-center border-transparent bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 disabled:bg-indigo-800"
                            onClick={signIn}
                            disabled={!formIsValid}
                            href="/home">
                            Sign In
                        </Button>

                        <p className="mt-1.5 text-center text-sm text-gray-600">
                            No account?{' '}
                            <Link href="/home"
                               className="font-medium text-indigo-600 rounded-md border-transparent transition-all duration-400 hover:text-indigo-500 outline-none focus-visible:ring-2 ring-indigo-500">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>

            <Modal show={show} setShow={setShow} title="Error" description={requestError}>
            </Modal>
        </>
    );
}
