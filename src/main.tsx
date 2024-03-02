import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { dashboardTheme } from './dashboardTheme.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Authentication } from './views/Authentication.tsx';
import { Database } from './views/Database.tsx';
import { ThemeProvider } from '@emotion/react';
import { DataGridDemo } from './components/DataGrid/DataGrid.tsx';

const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            { path: '/authentication', element: <Authentication /> },
            { path: '/database', element: <Database /> },
            { path: '/storage', element: <Authentication /> },
            { path: '/hosting', element: <Authentication /> },
        ],
    },
    { path: '/dataGrid', element: <DataGridDemo /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={dashboardTheme}>
            <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
