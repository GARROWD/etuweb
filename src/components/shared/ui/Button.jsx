import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
    primary: "py-1.5 px-4 text-white text-sm font-medium rounded-md shadow-sm border-2 outline-none focus-visible:ring-2 ring-indigo-500 transition-all duration-400"
}

export function Button({variant = 'primary', className, href, ...props}) {
    className = clsx(variantStyles[variant], className)

    return href
        ? (<Link href={href} className={className} {...props} />)
        : (<button className={className} {...props} />)
}
