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

    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src={require('./logo.png')}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Heavy Farm Tool
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
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
      <Navbar.Collapse>
        <Navbar.Link
          href="/navbars"
          active={true}
        >
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          About
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Services
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>



  )
}
export default Header;