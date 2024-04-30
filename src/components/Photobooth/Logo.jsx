const Logo = ({ logo1 }) => {
  return (
    <div className=" pt-2 border-solid border-white border-4 w-40 h-36 max-sm:pb-2 max-sm:w-40">
      <img
        className=" "
        src={logo1}
        alt=""
      />
    </div>
  );
};

export default Logo;
