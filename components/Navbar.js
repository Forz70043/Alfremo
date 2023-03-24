import { Navbar } from "flowbite-react";

function getCurrentPage(pageInput){
    if(!pageInput) return false;
}

export default function NavbarComponent(props){
    
    return(
        <>
            <Navbar fluid={true} rounded={true}>
                <Navbar.Brand href="/">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{props.titleBrand ?? ''}</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/home" active={props.currentPage === 'home' ? true : false}> Home</Navbar.Link>
                    <Navbar.Link href="/about" active={props.currentPage === 'about' ? true : false}> About</Navbar.Link>
                    <Navbar.Link href="/services" active={props.currentPage === 'services' ? true : false}> Services</Navbar.Link>
                    {/* {<Navbar.Link href="/"> Pricing</Navbar.Link>} */}
                    <Navbar.Link href="/contact" active={props.currentPage === 'contact' ? true : false}> Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}