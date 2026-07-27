import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'accent' | 'outline';
    isLoading?: boolean;
}

export const Button = ({
    children,
    variant = 'primary',
    isLoading = false,
    className,
    disabled,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={clsx(styles.button, styles[variant], className)}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? <span>Завантаження...</span> : children}
        </button>
    );
};