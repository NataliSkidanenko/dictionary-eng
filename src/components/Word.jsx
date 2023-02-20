import {useWord} from '../hooks/useWord';
import {useAuth} from '../hooks/useAuth';
import {useCallback, useEffect, useState} from 'react';
import {addWordToFirebase} from '../firebase/firebase-helpers';
import {useIsInDictionary} from '../hooks/useIsInDictionary';
import Loading from './Loading';

const Word = ({searchWord}) => {
    const {user, logIn} = useAuth();
    const {word, info, loading} = useWord(searchWord);
    const {isInDictionary, setIsInDictionary} = useIsInDictionary(user, word);

    const handlerPlayAudio = useCallback((audio) => {
        const audioFile = new Audio(audio);
        audioFile.play();
    });

    const handleAddToDictionary = useCallback(() => {
        if (user) {
            setIsInDictionary(true);
            addWordToFirebase(user.email, word);
        } else {
            logIn();
        }
    });

    return loading ? (
        <div className="flex justify-center items-center py-20 ">
            <Loading />
        </div>
    ) : (
        <>
            <section>
                <h1 className="text-gray-700 font-bold font-serif text-4xl md:text-6xl my-8 ">
                    {word.toLowerCase()}
                </h1>
                {info.pronunciations &&
                    info.pronunciations.map(({audio, context, transcriptions}, index) => (
                        <>
                            <div
                                key={index}
                                className="flex justify-between items-center font-sans text-lg md:text-3xl font-light">
                                <div className="py-4 flex items-center">
                                    <span className="text-purple-500 mr-4">
                                        {transcriptions[0].transcription}
                                    </span>
                                    <span className="text-gray-300 ">
                                        {'| ' + context.regions.join(', ')}
                                    </span>
                                </div>

                                {audio && (
                                    <button
                                        onClick={() => handlerPlayAudio(audio.url)}
                                        className="bg-purple-100 transition-all active:bg-purple-200 active:outline-none active:ring active:ring-purple-300  w-12 h-12 flex justify-center items-center rounded-full ">
                                        <svg
                                            viewBox="0 0 19 23"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4">
                                            <path
                                                className="fill-purple-500"
                                                d="M19 11.5L0.249999 22.3253L0.25 0.674682L19 11.5Z"
                                                fill="#D9D9D9"
                                            />
                                        </svg>
                                    </button>
                                )}
                            </div>
                            <hr className="w-full border-gray-100" />
                        </>
                    ))}

                <button
                    disabled={isInDictionary}
                    onClick={user ? handleAddToDictionary : logIn}
                    className={`flex justify-center items-center w-full md:w-auto rounded-md   font-large leading-7    my-4 px-3.5 py-3 ${
                        isInDictionary
                            ? 'bg-green-100  text-green-500 hover:bg-green-200'
                            : 'bg-purple-100  text-purple-500 hover:bg-purple-200'
                    }`}>
                    {isInDictionary ? (
                        <>
                            <svg
                                viewBox="0 0 193 193"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 mr-4">
                                <path
                                    className="fill-green-500"
                                    d="M96.5006 0.00134277C43.2899 0.00134277 0 43.2906 0 96.5007C0 149.711 43.2899 193 96.5006 193C149.711 193 193 149.711 193 96.5007C193 43.2906 149.711 0.00134277 96.5006 0.00134277ZM96.5006 177.18C52.0128 177.18 15.8196 140.988 15.8196 96.5007C15.8196 52.0135 52.0128 15.8209 96.5006 15.8209C140.988 15.8209 177.18 52.0135 177.18 96.5007C177.18 140.988 140.988 177.18 96.5006 177.18Z"
                                    fill="black"
                                />
                                <path
                                    className="fill-green-500"
                                    d="M138.246 59.4633L80.95 116.76L54.754 90.5639C51.6648 87.4753 46.657 87.4753 43.5677 90.5639C40.4791 93.6532 40.4791 98.661 43.5677 101.75L75.3568 133.539C76.9014 135.083 78.9257 135.856 80.95 135.856C82.9743 135.856 84.9985 135.083 86.5432 133.539L149.432 70.6503C152.521 67.561 152.521 62.5532 149.432 59.4639C146.343 56.3747 141.335 56.3747 138.246 59.4633Z"
                                    fill="black"
                                />
                            </svg>
                            <span>Already in your dictionary</span>
                        </>
                    ) : (
                        <>
                            <svg
                                viewBox="0 0 182 182"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 mr-4">
                                <path
                                    d="M174.834 55.6049C167.913 39.2725 156.372 25.3854 141.852 15.566C127.335 5.74651 109.802 -0.00248747 91 8.07401e-07C78.4683 -0.00071013 66.4919 2.55227 55.6056 7.16554C39.2736 14.0872 25.3862 25.6268 15.5663 40.1477C5.74687 54.6636 -0.00248747 72.1971 8.07351e-07 91C-0.00071013 103.532 2.55262 115.509 7.1659 126.395C14.0872 142.727 25.6279 156.615 40.1484 166.434C54.6651 176.253 72.1982 182.002 91 182C103.531 182.001 115.508 179.448 126.394 174.834C142.726 167.913 156.614 156.373 166.434 141.852C176.254 127.336 182.002 109.802 182 91C182.001 78.4676 179.447 66.4911 174.834 55.6049ZM163.662 121.662C157.672 135.803 147.65 147.868 135.056 156.382C122.457 164.897 107.322 169.864 91.0004 169.866C80.1163 169.866 69.7686 167.656 60.3394 163.662C46.1985 157.672 34.1328 147.65 25.6183 135.056C17.103 122.457 12.1357 107.322 12.1332 91C12.1339 80.1155 14.3439 69.7675 18.3376 60.3383C24.3276 46.1974 34.3497 34.1318 46.9443 25.6176C59.5432 17.1027 74.6783 12.1357 91 12.1332C101.884 12.1339 112.232 14.3435 121.661 18.3376C135.802 24.3272 147.868 34.3493 156.382 46.9439C164.897 59.5428 169.864 74.6776 169.866 91.0004C169.866 101.884 167.656 112.233 163.662 121.662Z"
                                    fill="black"
                                    className="fill-purple-500"
                                />
                                <path
                                    d="M138.488 85.064H96.936V43.5115C96.936 40.2334 94.2781 37.5755 91 37.5755C87.7219 37.5755 85.064 40.2334 85.064 43.5115V85.064H43.5115C40.2334 85.064 37.5755 87.7219 37.5755 91C37.5755 94.2781 40.2334 96.936 43.5115 96.936H85.064V138.488C85.064 141.767 87.7219 144.424 91 144.424C94.2781 144.424 96.936 141.767 96.936 138.488V96.936H138.488C141.767 96.936 144.424 94.2781 144.424 91C144.424 87.7219 141.767 85.064 138.488 85.064Z"
                                    fill="black"
                                    className="fill-purple-500"
                                />
                            </svg>
                            <span>Add to My Dictionary</span>
                        </>
                    )}
                </button>
            </section>
            <section className="my-10 py-4">
                {info.lexemes.length > 0 &&
                    info.lexemes.map(({partOfSpeech, senses, antonymSets, synonymSets}, index) => (
                        <div key={index}>
                            <h2 className="heading font-bold text-xl flex items-center">
                                <span className="mr-4">{partOfSpeech}</span>
                                <hr className="w-full h-px border-gray-200" />
                            </h2>
                            {senses.length > 0 && (
                                <>
                                    <p className="text-gray-300 mt-6 mb-2">Meaning</p>
                                    <ul className="list-disc list-inside px-4 my-4">
                                        {senses.map(({definition}, index) => (
                                            <li key={index} className="my-2">
                                                {definition}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {synonymSets && (
                                <>
                                    <p className="text-gray-300 mt-6 mb-2">Synonyms</p>
                                    <ul className="list-disc list-inside px-4 my-4">
                                        {synonymSets.map(({synonyms, sense}, index) => (
                                            <li key={index} className="my-2">
                                                <span className="text-gray-400">{sense}: </span>
                                                <span>{synonyms.join(', ')}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {antonymSets && (
                                <>
                                    <p className="text-gray-300 mt-6 mb-2">Antonyms</p>
                                    <ul className="list-disc list-inside px-4 my-4">
                                        {antonymSets.map(({antonyms, sense}, index) => (
                                            <li key={index} className="my-2">
                                                <span className="text-gray-400">{sense}: </span>
                                                <span>{antonyms.join(', ')}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    ))}
            </section>
        </>
    );
};

export default Word;
