import {useParams} from 'react-router';
import Dictionary from '../components/Dictionary/Dictionary';
import Word from '../components/Word';

const DictionaryPage = () => {
    const {word} = useParams();

    return (
        <div className="min-h-screen">
            <Dictionary />
            {word && <Word searchWord={word} />}
        </div>
    );
};

export default DictionaryPage;
