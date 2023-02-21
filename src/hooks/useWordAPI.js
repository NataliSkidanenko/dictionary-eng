import {useCallback, useEffect, useState} from 'react';

const API_URL = 'https://lingua-robot.p.rapidapi.com/language/v1/entries/en/';

export const useWordAPI = (word) => {
    const [info, setInfo] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
        },
    };

    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}${word.toLowerCase()}`, options)
            .then((response) => response.json())
            .then((response) => {
                if (response.entries.length > 0) {
                    setInfo({
                        lexemes: response.entries[0].lexemes,
                        pronunciations: response.entries[0].pronunciations,
                    });
                    setNotFound(false);
                } else {
                    setInfo([]);
                    setNotFound(true);
                }

                setLoading(false);
            })
            .catch((err) => {
                setInfo([]);
                console.error(err);
            });
    }, [word]);

    return {word, info, notFound, loading};
};
