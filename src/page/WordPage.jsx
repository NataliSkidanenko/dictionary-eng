import {useParams} from 'react-router-dom';
import Header from '../components/Header';
import Search from '../components/Search';
import Word from '../components/Word';

const WordPage = () => {
    const {word} = useParams();

    return (
        <>
            <Header />
            <Search />
            <Word searchWord={word} />
        </>
    );
};
export default WordPage;
