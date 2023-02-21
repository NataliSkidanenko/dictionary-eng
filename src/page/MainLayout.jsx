import {Outlet} from 'react-router';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';

const MainLayout = () => {
    return (
        <div className="flex flex-column justify-center items-center">
            <div className="w-full md:w-4/5 mx-5 md:mx-0 max-w-screen-xl ">
                <Header />
                <Search />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
