const Photo = ({ preview, changeColor, handleFileChange, handleFileChangePhoto1 }) => {


  return (
    <div className="flex flex-col items-center ">
      <label htmlFor="avatarInput" className="cursor-pointer">
        {preview ? (
          <img
            src={preview}
            height={192}
            width={192}
            className=" object-cover w-40 h-40 pb-2 max-sm:pb-2 max-sm:px-1 max-sm:w-40"
            alt=""
          />
        ) : (
          <div
            className={`  bg-white cursor-grab${
              changeColor === true
                ? " border-transparent bg-none"
                : " w-40 h-40 max-sm:w-36 max-sm:h-36 min-md:w-20 border-4 border-purple-500"
            } `}
          >
            <h1
              className={`text-center ${
                changeColor === true
                  ? " text-transparent max-sm:text-xs max-sm:truncate"
                  : "text-purple-900 font-ballet max-sm:text-xs max-lg:text-sm max-xl:text-sm max-2xl:text-sm"
              }`}
            >
              Click to Add Your Photo
            </h1>
          </div>
        )}
      </label>
      <input
        type="file"
        className="hidden"
        id="avatarInput"
        accept="image/*"
        onChange={handleFileChangePhoto1}
      />
    </div>
  );
};

export default Photo;
