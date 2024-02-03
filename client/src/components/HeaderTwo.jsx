import logo1 from "../assets/1.jpg";
import logo2 from "../assets/2.jpg";

const HeaderTwo = () => {
  return (
    <div className="navbar dark:bg-royalBlue">
      <div className="navbar-start flex flex-auto">
        <img src={logo1} className="h-20 rounded-full" />
      </div>
      <div className="navbar-center flex-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">School-Cool</h1>
          <p className="text-xs p-2">
            Affiliated to CBSE, New Delhi (Affiliation Number 2430107)
          </p>
        </div>
      </div>
      <div className="navbar-end flex-auto">
        <img src={logo2} className="h-20 rounded-full" />
      </div>
    </div>
  );
};

export default HeaderTwo;
