import { Avatar, Button, Dropdown, DropdownItem, Navbar } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";

const Header = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(err.message);
    }
  };

  return (
    <Navbar fluid>
      <Link to="/">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          School-Cool
        </span>
      </Link>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>

        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link as={"div"}>
          <Dropdown arrowIcon={false} inline label={<Link>About Us</Link>}>
            <Link>
              <Dropdown.Item>History</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Trustees & Governing Council</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>SPS Managing Committee</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>SPHS Managing Committee</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>School Management</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>School Song</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Aims and Objectives</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Awards and Accolades</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>The New Campus</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Mandatory Public Disclosure</Dropdown.Item>
            </Link>
          </Dropdown>
        </Navbar.Link>
        <Navbar.Link as={"div"}>
          <Dropdown
            arrowIcon={false}
            inline
            label={<Link>Infrastructure</Link>}
          >
            <Link>
              <Dropdown.Item>General</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Safety Steps & Certification</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Medical Care</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Book Counter</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Canteens</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Auditorium</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Libraries</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Laboratories</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Playroom</Dropdown.Item>
            </Link>
          </Dropdown>
        </Navbar.Link>
        <Navbar.Link as={"div"}>
          <Dropdown arrowIcon={false} inline label={<Link>Academics</Link>}>
            <Link>
              <Dropdown.Item>School Timings</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>School Uniform</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Rules & Regulations</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Faculty</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>The Smart Edge!</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Counselling Cell</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>School Calender</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Fee Structure</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Transfer Certificate</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Board Results</Dropdown.Item>
            </Link>
          </Dropdown>
        </Navbar.Link>
        <Navbar.Link as={"div"}>
          <Dropdown arrowIcon={false} inline label={<Link>Admission</Link>}>
            <Link>
              <Dropdown.Item>Apply Online</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Admission Notice</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Admission Procedure</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Application Status</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Photo Gallery</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Announcements</Dropdown.Item>
            </Link>
            <Link>
              <Dropdown.Item>Job</Dropdown.Item>
            </Link>
          </Dropdown>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
