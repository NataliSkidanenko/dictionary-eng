import {Link, NavLink} from 'react-router-dom';
import {Switch} from 'antd';
import {useAuth} from '../hooks/useAuth';

const Header = () => {
    const {user, logIn, logOut} = useAuth();

    return (
        <>
            <div className="flex justify-center items-center bg-purple-100 text-purple-400 h-14 absolute top-0 left-0 w-full text-sm">
                <div className="flex justify-between items-center w-full md:w-4/5 mx-5 md:mx-0 max-w-screen-xl">
                    {user != null ? (
                        <>
                            {' '}
                            <div className="flex items-center">
                                {user.photoURL && (
                                    <img
                                        className="w-10 h-10 rounded-full mr-2"
                                        src={user.photoURL}
                                        alt="Rounded avatar"
                                    />
                                )}

                                <span>Hello {user.displayName}</span>
                            </div>
                            <button className="text-purple-500" onClick={logOut}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <span>Login to have more options </span>
                            <button className="text-purple-500" onClick={logIn}>
                                Log in
                            </button>
                        </>
                    )}
                </div>
            </div>

            <header className="flex flex-wrap justify-between items-center my-10 mt-20">
                <Link to="/">
                    <svg
                        className="fill-gray-200"
                        width="38"
                        height="42"
                        viewBox="0 0 38 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M36.7503 5.25068C36.1204 5.25068 35.7 5.67036 35.7 6.30097V39.901H5.25C3.46509 39.901 2.09981 38.5358 2.09981 36.7508C2.09981 34.9658 3.46504 33.6006 5.25 33.6006H33.6C34.2299 33.6006 34.6503 33.1809 34.6503 32.5503V1.0503C34.6503 0.420414 34.2306 0 33.6 0H5.25C2.31 0 0 2.31 0 5.25V36.75C0 39.69 2.31 42 5.25 42H36.75C37.3799 42 37.8003 41.5803 37.8003 40.9497V6.2997C37.8003 5.66908 37.3799 5.2494 36.75 5.2494L36.7503 5.25068ZM32.5507 31.5007H6.30068V2.10067H32.5507V31.5007ZM2.10068 5.25068C2.10068 3.88545 2.94077 2.73049 4.20049 2.31068V31.6057C3.46513 31.8159 2.73053 32.1308 2.10068 32.5505V5.25068ZM34.6507 36.7507C34.6507 37.3806 34.231 37.801 33.6004 37.801H5.25038C4.62049 37.801 4.20007 37.3813 4.20007 36.7507C4.20007 36.1208 4.61976 35.7004 5.25038 35.7004H33.6004C34.231 35.7004 34.6507 36.1208 34.6507 36.7507ZM10.5007 8.40068C10.5007 7.77079 10.9204 7.35037 11.551 7.35037H27.301C27.9309 7.35037 28.3513 7.77006 28.3513 8.40068C28.3513 9.03056 27.9316 9.45097 27.301 9.45097L11.551 9.45024C10.9211 9.45024 10.5007 9.03056 10.5007 8.40068ZM27.301 12.6003C27.301 13.2302 26.8814 13.6506 26.2507 13.6506H12.6006C11.9707 13.6506 11.5503 13.2309 11.5503 12.6003C11.5503 11.9704 11.9699 11.55 12.6006 11.55H26.2507C26.8806 11.5507 27.301 11.9704 27.301 12.6003Z"
                            fill="#B9B9B9"
                        />
                    </svg>
                </Link>
                <div className="flex items-center">
                    <nav className="text-black ">
                        <ul className="flex">
                            <li className="mr-4">
                                <NavLink
                                    className={({isActive}) =>
                                        isActive
                                            ? 'hover:text-gray-500 text-gray-400'
                                            : 'hover:text-gray-500'
                                    }
                                    to="/search/example">
                                    Home
                                </NavLink>
                            </li>
                            <li className="mr-4">
                                <NavLink
                                    className={({isActive}) =>
                                        isActive
                                            ? 'hover:text-gray-500 text-gray-400'
                                            : 'hover:text-gray-500'
                                    }
                                    to="/dictionary">
                                    My Dictionary
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="theme flex border-l border-grey-100 py-1 pl-4">
                        <Switch className="bg-gray-300" defaultChecked />
                        <svg
                            className="ml-2"
                            width="21"
                            height="22"
                            viewBox="0 0 21 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                className="fill-gray-400"
                                d="M10.7549 21.2018C7.72399 21.2018 4.81918 19.9147 2.78501 17.6702C0.856593 15.5423 -0.127512 12.7907 0.0132565 9.9232C0.154521 7.05493 1.404 4.41325 3.53189 2.48496C4.74901 1.38174 6.16064 0.590353 7.72698 0.132267C7.98936 0.0559175 8.27213 0.135749 8.4554 0.337944C8.63944 0.540138 8.69067 0.829626 8.58871 1.08304C7.24202 4.42805 7.90849 8.16474 10.3278 10.8349C12.0919 12.7813 14.6117 13.8977 17.2402 13.8977C18.1293 13.8977 19.0114 13.7716 19.8617 13.5229C20.1241 13.447 20.4069 13.5263 20.5904 13.7285C20.774 13.9307 20.8254 14.2202 20.7237 14.4736C20.1137 15.9875 19.1875 17.3145 17.9709 18.4175C15.989 20.2129 13.4264 21.2017 10.7542 21.2017L10.7549 21.2018ZM6.80031 2.00103C5.96321 2.39223 5.18972 2.90727 4.4904 3.5412C2.64456 5.21374 1.56069 7.50474 1.43832 9.9926C1.31571 12.4806 2.16947 14.8669 3.84201 16.7127C5.60578 18.6592 8.12586 19.7756 10.755 19.7756C13.0722 19.7756 15.2945 18.9181 17.0133 17.3605C17.7124 16.7273 18.3008 16.0088 18.7724 15.2145C18.266 15.2871 17.7544 15.3236 17.2406 15.3236C14.2099 15.3236 11.3053 14.0369 9.272 11.7926C6.8683 9.14046 5.96525 5.43083 6.80069 2.0012L6.80031 2.00103Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;