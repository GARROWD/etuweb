import React, {useState} from 'react';
import {PASSWORD_INVALID} from "../shared/constants/ErrorMessages";
import clsx from "clsx";
import {Alert} from "../shared/ui/Alert";

export function PasswordInput ({passwordState, setPasswordState}) {
    const {value, isValid, errorMessage, showError} = passwordState;
    const [passwordLevel, setPasswordLevel] = useState(0);

    const validatePassword = function(password) {
        setPasswordState(passwordState => ({...passwordState, value: password, showError: true}));

        if(/^(?=.*[а-яa-z])(?=.*[А-ЯA-Z])(?=.*\d)[а-яa-zА-ЯA-Z\d@$!%*?&]{10,}$/.test(password)) { //(?=.*[@$!%*?&])
            setPasswordLevel(2);
            setPasswordState(passwordState => ({...passwordState, isValid: true}));
        }
        else if(/^(?=.*[а-яa-zА-ЯA-Z])[а-яa-zА-ЯA-Z\d]{6,}$/.test(password)) { //(?=.*\d)
            setPasswordLevel(1);
            setPasswordState(passwordState => ({...passwordState, isValid: true}));
        }
        else {
            setPasswordLevel(0);
            setPasswordState(passwordState => ({...passwordState, isValid: false, errorMessage: PASSWORD_INVALID}));
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
                                       {"text-orange-500": passwordLevel === 1 && isValid !== null},
                                       {"text-green-500": passwordLevel === 2 && isValid !== null})}>
                    Password
                </label>
            </div>

            <div className="mt-1">
                <input
                    className="block w-full px-3 py-2 text-gray-300 bg-gray-950 border-2 border-gray-800 rounded-md transition-all appearance-none outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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