import {useNavigate} from 'react-router';
import InfoImgButton from '../components/common/InfoImgButton';

const Page404 = () => {
    const navigate = useNavigate();

    return (
        <InfoImgButton
            title="This page does not exist"
            imgSrc="./error.png"
            imgAlt="This page does not exist"
            handlerButton={() => {
                navigate('/');
            }}
            textButton="Go to home page"
        />
    );
};

export default Page404;
