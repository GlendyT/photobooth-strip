

const Button = ({ htmlToImageConvert,resetPhotos,photo2Complete, handleDownloadImage}) => {

    const handleDownload = () => {
      handleDownloadImage();
    };
  
  
  
    return (
      <div className="max-md:flex ">
        <button
          className="bg-purple-500 rounded-lg text-white font-bold p-2 mt-4 mr-2 disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors max-sm:text-xs max-sm:mt-2"
          onClick={handleDownload}
          disabled={!photo2Complete}
        >
          Save Photobooth
        </button>
  
        <button
          className="bg-purple-500 rounded-lg text-white font-bold p-2 mt-4 ml-2 disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors max-sm:text-xs max-sm:mt-2"
          onClick={resetPhotos}
            
        >
          Restart
        </button>
      </div>
    );
  };
  
  export default Button;
  
  