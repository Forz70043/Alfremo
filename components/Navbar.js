import { Navbar } from "flowbite-react";

export default function NavbarComponent(props){
    return(
        <>
            <Navbar fluid={true} rounded={true}>
                <Navbar.Brand href="/">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Alfremo</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/home" active={true}> Home</Navbar.Link>
                    <Navbar.Link href="/about"> About</Navbar.Link>
                    <Navbar.Link href="/services"> Services</Navbar.Link>
                    {/* {<Navbar.Link href="/"> Pricing</Navbar.Link>} */}
                    <Navbar.Link href="/navbars"> Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}