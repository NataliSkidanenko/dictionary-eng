import {NavLink, useNavigate} from 'react-router-dom';

const WordList = ({dictionary}) => {
    return (
        <div className="max-h-60 bg-purple-100 my-8 px-8 overflow-scroll rounded-xl">
            <ul className="text-gray-700 font-bold font-serif text-4xl md:text-6xl ">
                {dictionary.map(({id: word}) => (
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

export default WordList;
