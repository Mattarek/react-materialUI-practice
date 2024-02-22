import { Navbar } from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import { DataGridDemo } from './components/DataGrid/DataGrid';

function App() {
    return (
        <Grid container>
            <Navbar />
            <Outlet />
            <DataGridDemo />
        </Grid>
    );
}

export default App;
