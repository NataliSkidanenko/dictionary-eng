import {useCallback, useState} from 'react';
import {useNavigate} from 'react-router';

export const useSearchForm = () => {
    const [searchInputValue, setSearchInputValue] = useState('');
    const navigate = useNavigate();

    const handleSearchInput = useCallback((ev) => {
        setSearchInputValue(ev.target.value);
    });

    const handleSearchForm = useCallback((ev) => {
        setSearchInputValue('');
        ev.preventDefault();
        if (searchInputValue.trim() !== '') {
            navigate(`/search/${searchInputValue.trim()}`);
        }
    });

    return {searchInputValue, handleSearchForm, handleSearchInput};
};
