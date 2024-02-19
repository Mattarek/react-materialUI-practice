import { Button } from '@mui/material';
import { Navbar } from './components/Navbar/Navbar';
function App() {
    return (
        <div>
            <Button
                variant='outlined'
                onClick={() => console.log('Hi!')}>
                Click!
            </Button>
            <Navbar />
        </div>
    );
}

export default App;
