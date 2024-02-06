import clsx from 'clsx'
import React from 'react'

interface Props {
    variant?: "primary" | "white",
    size?: "sm" | "md" | "xs",
    children: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    classNames?: string,
    icon?: React.ReactNode
}

const Button = ({ variant="primary", size = "md", children, onClick, classNames, icon }: Props) => {

    const variants = {
        primary: "bg-primary text-white shadow-lg shadow-primary/40",
        white: "bg-gray-50/30 shadow-lg shadow-gray-200/60"
    }

    const sizes = {
        xs: "h-7 text-[10px] px-4",
        sm: "h-10 text-sm px-8",
        md: "h-12 text-sm px-8"
    }

    return (
        <button onClick={onClick} className={clsx("flex items-center gap-3 rounded-lg font-medium", variants[variant], sizes[size], classNames)}>
            <>
                {children}
            </>
            {icon}
        </button>
    )
}

export default Button