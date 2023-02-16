import ClerkProviderWithRoutes from './components/ClerkProvidersWithRoutes';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <ClerkProviderWithRoutes />
        </BrowserRouter>
    );
};

export default App;
