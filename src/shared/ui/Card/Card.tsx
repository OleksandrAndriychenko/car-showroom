import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

interface CardProps {
    children: ReactNode;
    hoverable?: boolean;
    className?: string;
}

export const Card = ({ children, hoverable = false, className }: CardProps) => {
    return (
        <div className={clsx(styles.card, hoverable && styles.hoverable, className)}>
            {children}
        </div>
    );
};