import { Home } from '@mui/icons-material';
import './styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
