import { Outlet } from 'react-router-dom';
import { Header } from '@widgets/Header/Header';
import { Container } from '@shared/ui/Container/Container';
import styles from './Layout.module.css';

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                <Container>
                    <Outlet />
                </Container>
            </main>
        </div>
    );
};