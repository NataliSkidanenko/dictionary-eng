import {ClerkProvider, RedirectToSignIn, SignedIn, SignedOut} from '@clerk/clerk-react';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import DictionaryPage from '../page/DictionaryPage';
import WordPage from '../page/WordPage';
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const ClerkProviderWithRoutes = () => {
    const navigate = useNavigate();

    return (
        <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
            <SignedIn>
                <div className="flex justify-center">
                    <div className="w-full md:w-4/5 mx-5 md:mx-0 max-w-screen-xl">
                        <Routes>
                            <Route path="/" element={<Navigate to="search/example" />} />
                            <Route path="/search/:word" element={<WordPage />} />
                            <Route path="/dictionary" element={<DictionaryPage />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </div>
                </div>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </ClerkProvider>
    );
};

export default ClerkProviderWithRoutes;
