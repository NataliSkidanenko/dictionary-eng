const InfoImgButton = ({title, imgSrc, imgAlt, handlerButton, textButton}) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-center text-3xl text-gray-300 mt-12 font-light">{title}</p>

            <img src={imgSrc} alt={imgAlt} className="md:max-w-2xl my-4" />

            <button
                onClick={handlerButton}
                className="bg-purple-500 text-white hover:bg-purple-600 flex justify-center items-center w-full md:w-52 rounded-md   font-large leading-7    my-4 px-3.5 py-3 ">
                <span>{textButton}</span>
            </button>
        </div>
    );
};
export default InfoImgButton;
