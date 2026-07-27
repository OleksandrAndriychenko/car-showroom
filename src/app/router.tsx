import { Routes, Route } from 'react-router-dom';
import { Layout } from '@widgets/Layout/Layout';
import { HomePage } from '@pages/HomePage/ui/HomePage';
import { VehiclePage } from '@pages/VehiclePage/ui/VehiclePage';

const NotFoundPlaceholder = () => <h2>404 — Сторінка не знайдена</h2>;

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="vehicle/:id" element={<VehiclePage/>} />
                <Route path="*" element={<NotFoundPlaceholder />} />
            </Route>
        </Routes>
    );
};