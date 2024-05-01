import { Routes, Route } from 'react-router-dom';
import AdminHome from './pages/admin/AdminHome';

function App() {
    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={<AdminHome />}
                />
            </Routes>
        </>
    );
}

export default App;
