import { Navbar } from "flowbite-react";
import { useSession, signIn, signOut } from "next-auth/react"
import ThemeToggle from "./ThemeToggleComponent";
import { userService } from 'services';


const navbarItems = [
    { title: 'Home', path: '/', active: false },
    { title: 'Accedi', path: '/login', active: false },
    { title: 'Registrati', path: '/register', active: false },
];

const navbarItemsPrivate = [
    { title: 'Utenti', path: '/users', active: false },
    { title: 'Esci', path: '/logout', active: false, onClick: (userService.logout) },
];

export default function NavbarComponent(props) {
    

    return (
        <>
            <Navbar fluid={true} rounded={false}>
                <Navbar.Brand href="/">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Alfremo Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{props.titleBrand ?? ''}</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    {navbarItems.map(
                        (navbarItem, index) => <Navbar.Link key={index} href={navbarItem.path} onClick={navbarItem.onClick} active={props.currentPage === navbarItem.path ? true : false}> {navbarItem.title}</Navbar.Link>
                    )}
                    {userService.userValue ?
                        navbarItemsPrivate.map(
                        (navbarItem, index) => <Navbar.Link key={index} href={navbarItem.path} onClick={navbarItem.onClick} active={props.currentPage === navbarItem.path ? true : false}> {navbarItem.title}</Navbar.Link>
                    ) : null }
                    <ThemeToggle />

                    {/* {<Navbar.Link href="/about" active={props.currentPage === 'about' ? true : false}> About</Navbar.Link>
                    <Navbar.Link href="/services" active={props.currentPage === 'services' ? true : false}> Services</Navbar.Link>
                    <Navbar.Link href="/contact" active={props.currentPage === 'contact' ? true : false}> Contact</Navbar.Link>} */}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}