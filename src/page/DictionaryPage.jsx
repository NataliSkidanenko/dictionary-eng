import {useParams} from 'react-router';
import Dictionary from '../components/Dictionary';
import Header from '../components/Header';
import Search from '../components/Search';
import Word from '../components/Word';

const DictionaryPage = () => {
    const {word} = useParams();

    return (
        <>
            <Header />
            <Search />
            <Dictionary />
            {word && <Word searchWord={word} />}
        </>
    );
};

export default DictionaryPage;
