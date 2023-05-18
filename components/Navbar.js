import { Navbar } from "flowbite-react";
// import { useSession, signIn, signOut } from "next-auth/react"
import ThemeToggle from "./ThemeToggleComponent";
import { userService } from 'services';


const navbarItems = [
    { title: 'Home', path: '/', active: false },
    { title: 'Accedi', path: '/login', active: false },
    { title: 'Registrati', path: '/register', active: false },
];

const navbarItemsPrivate = [
    { title: 'Esci', path: '/logout', active: false, onClick: (userService.logout) },
];

export default function NavbarComponent({ currentPage }) {
    return (
        <>
            <Navbar fluid={true} rounded={false} className="bg-white border-b border-gray-100 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
                <Navbar.Brand href="/">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Alfremo Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{'Alfremo'}</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    {navbarItems.map(
                        (navbarItem, index) => <Navbar.Link key={index} href={navbarItem.path} onClick={navbarItem.onClick} active={currentPage === navbarItem.path ? "true" : "false"}> {navbarItem.title}</Navbar.Link>
                    )}
                    {userService.userValue ?
                        navbarItemsPrivate.map(
                            (navbarItem, index) => <Navbar.Link key={index} href={navbarItem.path} onClick={navbarItem.onClick} active={currentPage === navbarItem.path ? "true" : "false"}> {navbarItem.title}</Navbar.Link>
                        ) : null}
                    <ThemeToggle />
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
