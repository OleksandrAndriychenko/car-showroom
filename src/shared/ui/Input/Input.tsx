import { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className, ...props }, ref) => {
        return (
            <div className={styles.field}>
                {label && <label className={styles.label}>{label}</label>}
                <input
                    ref={ref}
                    className={clsx(styles.input, error && styles.hasError, className)}
                    {...props}
                />
                {error && <span className={styles.error}>{error}</span>}
            </div>
        );
    }
);

Input.displayName = 'Input';