import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Authentication } from './views/Authentication.tsx';
import { Database } from './views/Database.tsx';

const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            { path: '/authentication', element: <Authentication /> },
            { path: '/database', element: <Database /> },
            { path: '/storage', element: <Authentication /> },
            { path: '/hosting', element: <Authentication /> },
            { path: '/functions', element: <Authentication /> },
            { path: '/machinelLearning', element: <Authentication /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
);
