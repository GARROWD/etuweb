import {Transition} from "@headlessui/react";
import {Fragment} from "react";

export function Alert({children, props, show}) {
    return (
        <Transition show={show}
                    enterFrom="translate-y-0 opacity-0"
                    enterTo="translate-y-2 opacity-100"
                    leaveFrom="translate-y-2 opacity-100"
                    leaveTo="translate-y-0 opacity-0"
                    as={Fragment}>
            <div
                className="absolute z-10 flex text-gray-300 text-sm transition-all duration-400 backdrop-blur bg-gray-950/25 rounded-md border-2 border-red-900 p-1.5"
                {...props}>
                {children}
            </div>
        </Transition>
    )
};