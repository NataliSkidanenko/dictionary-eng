import {useParams} from 'react-router-dom';
import Word from '../components/Word/Word';

const WordPage = () => {
    const {word} = useParams();

    return <Word searchWord={word} />;
};
export default WordPage;
