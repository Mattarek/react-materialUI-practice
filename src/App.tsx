import './styles/global.scss';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [],
    },
]);

function App() {
    return <div></div>;
}

export default App;
