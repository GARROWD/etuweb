import React, {useEffect, useState} from 'react';
import {
    PHONE_NUMBER_INVALID,
    PHONE_NUMBER_NOT_UNIQUE,
    USERNAME_INVALID,
    USERNAME_NOT_UNIQUE
} from "@/components/shared/constants/ErrorMessages";
import {UsernameInput} from "@/components/features/UsernameInput";
import {PhoneNumberInput} from "@/components/features/PhoneNumberInput";
import {PasswordInput} from "@/components/features/PasswordInput";
import {Button} from "@/components/shared/ui/Button";
import {Modal} from "@/components/shared/ui/Modal";

export function SignUpForm () {
    const errorHandlers = {
        "message.username.notUnique": () => {
            setUsernameState(usernameState => ({
                ...usernameState,
                errorMessage: USERNAME_NOT_UNIQUE,
                showError: true,
                isValid: false
            }));
        },
        "message.username.invalid": () => {
            setUsernameState(usernameState => ({
                ...usernameState,
                errorMessage: USERNAME_INVALID,
                showError: true,
                isValid: false
            }));
        },
        "message.phoneNumber.notUnique": () => {
            setPhoneNumberState(phoneNumberState => ({
                ...phoneNumberState,
                errorMessage: PHONE_NUMBER_NOT_UNIQUE,
                showError: true,
                isValid: false
            }));
        },
        "message.phoneNumber.invalid": () => {
            setPhoneNumberState(phoneNumberState => ({
                ...phoneNumberState,
                errorMessage: PHONE_NUMBER_INVALID,
                showError: true,
                isValid: false
            }));
        },
        "message.customer.nullFields": () => {
            setUsernameState(usernameState => ({
                ...usernameState, isValid: false
            }));
            setPhoneNumberState(phoneNumberState => ({
                ...phoneNumberState, isValid: false
            }));
            setPasswordState(passwordState => ({...passwordState, isValid: true}));
            console.log("ЭТОГО НЕ ДОЛЖНО БЫЛО ПРОИЗОЙТИ: ");
        },
    };

    const [usernameState, setUsernameState] = useState({
                                                           value: "",
                                                           errorMessage: "",
                                                           isValid: null,
                                                           showError: false,
                                                       });

    const [phoneNumberState, setPhoneNumberState] = useState({
                                                                 value: "",
                                                                 errorMessage: "",
                                                                 isValid: null,
                                                                 showError: false,
                                                             });

    const [passwordState, setPasswordState] = useState({
                                                           value: "",
                                                           errorMessage: "",
                                                           isValid: null,
                                                           showError: false,
                                                       });

    const [requestError, setRequestError] = useState(false);
    const [show, setShow] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if(usernameState.isValid && phoneNumberState.isValid && passwordState.isValid) {
            setFormIsValid(true);
        }
        else {
            setFormIsValid(false);
        }
    }, [usernameState.isValid, phoneNumberState.isValid, passwordState.isValid])

    const signUp = async function() {
        try {
            //await SignUpService.signUp(usernameState.value, phoneNumberState.value, passwordState.value);
            setSuccess(true);
        } catch(e) {
            if(e.response && e.response.status === 400) {
                const data = e.response.data;
                console.log(e);

                Object.keys(data).forEach(key => {
                    if(errorHandlers[key]) {
                        errorHandlers[key]();
                    }
                });

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

        setPhoneNumberState(() => ({
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
            <div className="mt-8 mx-6 sm:mx-auto sm:w-full sm:max-w-sm bg-gray-950 backdrop-blur border-2 border-indigo-950 py-8 px-10 rounded-2xl shadow-glow">
                <form className="space-y-6" action="src/3-widgets#" method="POST">
                    <UsernameInput usernameState={usernameState}
                                   setUsernameState={setUsernameState}/>

                    <PhoneNumberInput phoneNumberState={phoneNumberState}
                                      setPhoneNumberState={setPhoneNumberState}/>

                    <PasswordInput passwordState={passwordState}
                                   setPasswordState={setPasswordState}/>

                    <div>
                        <Button
                            className="w-full flex justify-center border-transparent bg-orange-600 hover:bg-orange-500 active:bg-orange-600 disabled:bg-orange-800"
                            onClick={signUp}
                            disabled={!formIsValid}>
                            Sign Up
                        </Button>

                        <p className="mt-2 text-center text-sm text-gray-600">
                            Have account?{' '}
                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                            <a href="/about"
                               className="font-medium text-indigo-600 rounded-md border-transparent transition-all duration-400 hover:text-indigo-500 outline-none focus-visible:ring-2 ring-indigo-500">
                                Sign In
                            </a>
                        </p>
                    </div>
                </form>
            </div>

            <Modal show={show} setShow={setShow} title="Error" description={requestError}/>
        </>
    );
}
