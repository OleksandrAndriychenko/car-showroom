import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Container.module.css';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
    return <div className={clsx(styles.container, className)}>{children}</div>;
};