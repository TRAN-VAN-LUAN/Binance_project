import { Outlet } from 'react-router-dom';
import { LayoutProvider } from './layout/context/layoutContext';
// import Login from './pages/Login/Login';

function App() {
    return (
        <LayoutProvider>
            <Outlet></Outlet>
        </LayoutProvider>
    );
}

export default App;
