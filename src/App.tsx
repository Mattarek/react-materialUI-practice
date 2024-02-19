import { Button } from '@mui/material';
function App() {
    return (
        <div>
            <Button
                variant='outlined'
                onClick={() => console.log('Hi!')}>
                Click!
            </Button>
        </div>
    );
}

export default App;
