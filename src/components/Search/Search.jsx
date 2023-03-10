import {useSearchForm} from '../../hooks/useSearchForm';

const Search = () => {
    const {searchInputValue, handleSearchForm, handleSearchInput} = useSearchForm();

    return (
        <>
            <form onSubmit={handleSearchForm} name="search" className="relative">
                <input
                    value={searchInputValue}
                    onChange={handleSearchInput}
                    type="text"
                    placeholder="Enter a word"
                    className="bg-gray-100 dark:bg-slate-700 px-4 py-3 w-full rounded-xl"
                />
                <button type="submit" className="absolute right-4 top-4">
                    <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            className="fill-purple-500 dark:fill-white"
                            d="M18.6844 17.1811L14.0247 12.5214C16.3675 9.47565 16.1333 5.07626 13.3218 2.29085C11.786 0.755018 9.80742 0 7.80306 0C5.79855 0 3.82018 0.754832 2.2843 2.29085C-0.761432 5.33658 -0.761432 10.2826 2.2843 13.3284C3.82013 14.8642 5.79869 15.6192 7.80306 15.6192C9.4691 15.6192 11.1351 15.0986 12.5148 14.0313L17.2006 18.6648C17.4088 18.873 17.669 18.9771 17.9554 18.9771C18.2158 18.9771 18.5022 18.873 18.7102 18.6648C19.1008 18.2744 19.1008 17.5974 18.6843 17.181L18.6844 17.1811ZM7.82913 13.5105C6.2933 13.5105 4.88749 12.9119 3.79415 11.8445C1.58134 9.6317 1.58134 6.01336 3.79415 3.77462C4.8615 2.70727 6.2933 2.10858 7.82913 2.10858C9.36497 2.10858 10.7708 2.70727 11.8641 3.77462C12.9575 4.84198 13.5302 6.27378 13.5302 7.80961C13.5302 9.34545 12.9315 10.7513 11.8641 11.8446C10.7968 12.9379 9.33903 13.5106 7.82913 13.5106V13.5105Z"
                            fill="black"
                        />
                    </svg>
                </button>
            </form>
        </>
    );
};

export default Search;
