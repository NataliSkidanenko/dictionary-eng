import {NavLink} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';
import {useMyDictionary} from '../hooks/useMyDictionary';

const Dictionary = () => {
    const {user, logIn} = useAuth();
    const {myDictionary, loading} = useMyDictionary(user);

    return (
        <div className="max-h-60 bg-purple-100 my-8 px-8 overflow-scroll">
            <ul className="text-gray-700 font-bold font-serif text-4xl md:text-6xl ">
                {myDictionary.length > 0 &&
                    myDictionary.map(({id: word}) => (
                        <li className="py-4" key={word}>
                            <NavLink
                                to={`/dictionary/${word}`}
                                className={({isActive}) =>
                                    isActive ? ' bg-purple-400 text-white' : ''
                                }>
                                {word}
                            </NavLink>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Dictionary;
