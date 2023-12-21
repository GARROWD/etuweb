import React from 'react';
import {USERNAME_EMPTY, USERNAME_INVALID} from "../shared/constants/ErrorMessages";
import clsx from "clsx";
import {Alert} from "../shared/ui/Alert";

export function SignInUsernameInput({usernameState, setUsernameState}) {
    const {value, isValid, errorMessage, showError} = usernameState;

    const validateUsername = function(username) {
        setUsernameState(usernameState => ({...usernameState, value: username, showError: true}));

        if(username.length === 0) {
            setUsernameState(usernameState => ({...usernameState, isValid: false, errorMessage: USERNAME_EMPTY}));
        }
        else {
            setUsernameState(usernameState => ({...usernameState, isValid: true}));
        }
    }

    const hideError = function() {
        setUsernameState(usernameState => ({...usernameState, showError: false}));
    }

    return (
        <div>
            <label className={clsx("block text-gray-300 text-sm font-medium duration-400 transition-all",
                                   {"text-red-500": !isValid && isValid !== null}, {"text-green-500": isValid})}>
                Username
            </label>

            <div>
                <input
                    className="block w-full px-3 py-1.5 text-gray-300 bg-gray-950 border-2 border-gray-800 rounded-md transition-all appearance-none outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                    autoComplete="text"
                    value={value}
                    onChange={event => validateUsername(event.target.value)}
                    onFocus={event => validateUsername(event.target.value)}
                    onBlur={hideError}
                />
            </div>

            <Alert show={!isValid && showError}>
                {errorMessage}
            </Alert>
        </div>
    );
};