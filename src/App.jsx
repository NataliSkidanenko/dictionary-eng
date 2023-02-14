import {Navigate, Route, Routes} from 'react-router-dom';
import DictionaryPage from './page/DictionaryPage';
import WordPage from './page/WordPage';

const App = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full md:w-4/5 mx-5 md:mx-0 max-w-screen-xl">
                <Routes>
                    <Route path="/" element={<Navigate to="search/example" />} />
                    <Route path="/search/:word" element={<WordPage />} />
                    <Route path="/dictionary" element={<DictionaryPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
