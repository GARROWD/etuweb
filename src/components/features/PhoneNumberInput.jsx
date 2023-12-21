import React from 'react';
import {PHONE_NUMBER_INVALID} from "../shared/constants/ErrorMessages";
import clsx from "clsx";
import {Alert} from "../shared/ui/Alert";

export function PhoneNumberInput({phoneNumberState, setPhoneNumberState}) {
    const {value, isValid, errorMessage, showError} = phoneNumberState;

    const validatePhoneNumber = function(phoneNumber) {
        setPhoneNumberState(phoneNumberState => ({...phoneNumberState, value: phoneNumber, showError: true}));

        if(!/^(\+7|8)[0-9]{10}$/.test(phoneNumber)) {
            setPhoneNumberState(
                phoneNumberState => ({...phoneNumberState, isValid: false, errorMessage: PHONE_NUMBER_INVALID}));
        }
        else {
            setPhoneNumberState(phoneNumberState => ({...phoneNumberState, isValid: true}));
        }
    }

    const hideError = function() {
        setPhoneNumberState(phoneNumberState => ({...phoneNumberState, showError: false}));
    }

    return (
        <div>
            <label className={clsx("block text-gray-300 text-sm font-medium duration-400 transition-all",
                                   {"text-red-500": !isValid && isValid !== null}, {"text-green-500": isValid})}>
                Phone number
            </label>

            <div className="mt-1">
                <input
                    className="block w-full px-3 py-2 text-gray-300 bg-gray-950 border-2 border-gray-800 rounded-md transition-all appearance-none outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                    autoComplete="text"
                    value={value}
                    onChange={event => validatePhoneNumber(event.target.value)}
                    onFocus={event => validatePhoneNumber(event.target.value)}
                    onBlur={hideError}
                />
            </div>

            <Alert show={!isValid && showError}>
                {errorMessage}
            </Alert>
        </div>
    );
};