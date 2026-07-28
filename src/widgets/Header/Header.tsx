import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/Container/Container';
import styles from './Header.module.css';
import { Logo } from '@shared/ui/Logo/Logo';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.content}>
                    <Logo/>
                    <nav className={styles.nav}>
                        <Link to="/" className={styles.link}>
                            Каталог
                        </Link>
                    </nav>
                </div>
            </Container>
        </header>
    );
};