import { Link } from 'react-router-dom';
import { Container } from '@shared/ui/Container/Container';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.content}>
                    <Link to="/" className={styles.logo}>
                        🚗 Drive<span className={styles.accent}>Market</span>
                    </Link>
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