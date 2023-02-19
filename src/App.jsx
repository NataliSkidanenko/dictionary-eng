import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import WordPage from './page/WordPage';
import DictionaryPage from './page/DictionaryPage';

const App = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full md:w-4/5 mx-5 md:mx-0 max-w-screen-xl">
                <Routes>
                    <Route path="/" element={<Navigate to="search/example" />} />
                    <Route path="/search/:word" element={<WordPage />} />
                    <Route path="/dictionary" element={<DictionaryPage />} />
                    <Route path="/dictionary/:word" element={<DictionaryPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
