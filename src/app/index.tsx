import { BrowserRouter } from 'react-router-dom';
import { QueryProvider } from './providers/QueryProvider';
import { AppRouter } from './router';
import './styles/global.css';

export const App = () => {
    return (
        <QueryProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </QueryProvider>
    );
};