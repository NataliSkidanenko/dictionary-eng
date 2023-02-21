import {useNavigate} from 'react-router';
import {useAuth} from '../../hooks/useAuth';
import {useMyDictionary} from '../../hooks/useMyDictionary';
import InfoImgButton from '../common/InfoImgButton';
import Loading from '../common/Loading';
import WordList from './WordList';

const Dictionary = () => {
    const {user, logIn} = useAuth();
    const {myDictionary, loading} = useMyDictionary(user);
    const navigate = useNavigate();

    return loading ? (
        <div className="flex justify-center items-center py-20 ">
            <Loading />
        </div>
    ) : user ? (
        myDictionary.length > 0 ? (
            <WordList dictionary={myDictionary} />
        ) : (
            <InfoImgButton
                title="Your dictionary is empty"
                imgSrc="/dictionary-empty.png"
                imgAlt="Dictionary is empty"
                handlerButton={() => {
                    navigate('/');
                }}
                textButton="Go to home page"
            />
        )
    ) : (
        <InfoImgButton
            title="Log in to have access to your dictionary"
            imgSrc="/dictionary-empty.png"
            imgAlt="Welcome"
            handlerButton={logIn}
            textButton="Log in"
        />
    );
};

export default Dictionary;
