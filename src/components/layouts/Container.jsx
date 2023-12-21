import {forwardRef} from 'react'
import clsx from 'clsx'

const variantStyles = {
    blur:
        'backdrop-blur-3xl bg-gray-950/80 /*border-b border-zinc-700/40*/'
}

const OuterContainer = forwardRef(function OuterContainer({className, children, ...props}, ref) {
    return (
        <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
            <div className="mx-auto max-w-7xl lg:px-8">
                {children}
            </div>
        </div>
    )
})

const InnerContainer = forwardRef(function InnerContainer({className, children, variant, ...props}, ref) {
    return (
        <div ref={ref} className={clsx('relative px-12', variantStyles[variant], className)} {...props}>
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                {children}
            </div>
        </div>
    )
})

export const Container = forwardRef(function Container({children, variant, ...props}, ref) {
    return (
        <OuterContainer ref={ref} {...props}>
            <InnerContainer variant={variant}>
                {children}
            </InnerContainer>
        </OuterContainer>
    )
})

Container.Outer = OuterContainer
Container.Inner = InnerContainer
