import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import WordPage from './page/WordPage';
import DictionaryPage from './page/DictionaryPage';
import Footer from './components/Footer/Footer';
import MainLayout from './page/MainLayout';
import Page404 from './page/Page404';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Navigate to="/search/example" />} />
                    <Route path="/dictionary-eng/" element={<Navigate to="/search/example" />} />
                    <Route path="/search/:word" element={<WordPage />} />
                    <Route path="/dictionary" element={<DictionaryPage />} />
                    <Route path="/dictionary/:word" element={<DictionaryPage />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
