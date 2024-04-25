const Photo2 = ({ handleFileChange, preview, changeColor, }) => {
  return (
    <>
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
              className={`  bg-white cursor-grab ${
                changeColor === true
                  ? " border-transparent bg-none"
                  : "w-40 h-40 max-sm:w-36 max-sm:h-36 border-4 border-purple-500"
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
          onChange={handleFileChange}
          className="hidden"
          id="avatarInput"
          accept="image/*"
        />
      </div>
      <div className="border-solid border-white border-4 my-2 mx-2 mb-4 p-3 text-white bg-backg1 bg-contain bg-no-repeat max-sm:p-1.5 max-sm:mx-1">
        <div className="mx-10 p-4 border-white border-4 border-dashed mt-20"></div>
      </div>
    </>
  );
};

export default Photo2;
