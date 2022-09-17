import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext"
import { Navbar, Dropdown, Avatar } from "flowbite-react";

const Header = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  // console.log(user.phoneNumber)
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="#">
        <img
          src={require('./logo.png')}
          className="mr-3 h-6 sm:h-9"
          alt="Heavy Farm Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Heavy Farm Tool
        </span>
      </Navbar.Brand>
     
      <Navbar.Collapse>
        <Navbar.Link
          href="/home"
          active={true}
        >
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">
          About
        </Navbar.Link>
        <Navbar.Link href="/services">
          Services
        </Navbar.Link>
        <Navbar.Link href="/pricing">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="/contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
      <div className="">  
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              {user && user.phoneNumber}
            </span>
            <span className="block truncate text-sm font-medium">

            </span>
          </Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>

    </>

  )
}
export default Header;