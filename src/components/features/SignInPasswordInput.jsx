import React from 'react';
import {PASSWORD_EMPTY, PASSWORD_INVALID} from "../shared/constants/ErrorMessages";
import clsx from "clsx";
import {Alert} from "../shared/ui/Alert";

export function SignInPasswordInput({passwordState, setPasswordState}) {
    const {value, isValid, errorMessage, showError} = passwordState;

    const validatePassword = function(password) {
        setPasswordState(passwordState => ({...passwordState, value: password, showError: true}));

        if(password.length === 0) {
            setPasswordState(passwordState => ({...passwordState, isValid: false, errorMessage: PASSWORD_EMPTY}));
        }
        else {
            setPasswordState(passwordState => ({...passwordState, isValid: true}));
        }
    }

    const hideError = function() {
        setPasswordState(passwordState => ({...passwordState, showError: false}));
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <label className={clsx("block text-gray-300 text-sm font-medium duration-400 transition-all",
                                       {"text-red-500": !isValid && isValid !== null},
                                       {"text-green-500": isValid})}>
                    Password
                </label>

                <div className="text-sm">
                    <a href="@/components/features/SignInPasswordInput#"
                       className="font-medium text-indigo-600 border-2 rounded-md border-transparent transition-all duration-400 hover:text-indigo-500 outline-none focus-visible:ring-2 ring-indigo-500">
                        Forgot password?
                    </a>
                </div>
            </div>

            <div>
                <input
                    className="block w-full px-3 py-1.5 text-gray-300 bg-gray-950 border-2 border-gray-800 rounded-md transition-all appearance-none outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                    autoComplete="text"
                    value={value}
                    onChange={event => validatePassword(event.target.value)}
                    onFocus={event => validatePassword(event.target.value)}
                    onBlur={hideError}
                />
            </div>

            <Alert show={!isValid && showError}>
                {errorMessage}
            </Alert>
        </div>
    );
};