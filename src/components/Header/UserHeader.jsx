import {useAuth} from '../../hooks/useAuth';

const UserHeader = () => {
    const {user, logIn, logOut} = useAuth();

    return (
        <div className="flex justify-center items-center bg-purple-100 text-purple-400 dark:bg-purple-900 dark:text-purple-400 h-14 absolute top-0 left-0 w-full text-sm">
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
    );
};

export default UserHeader;
