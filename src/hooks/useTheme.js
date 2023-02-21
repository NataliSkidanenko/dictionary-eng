import {useCallback, useEffect, useState} from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (localStorage.theme === 'dark') {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            document.documentElement.classList.add('light');
        }
    }, []);

    const toggleTheme = useCallback(() => {
        if (theme === 'dark') {
            setTheme('light');
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            setTheme('dark');
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
            localStorage.theme = 'dark';
        }
    });

    return {theme, toggleTheme};
};
