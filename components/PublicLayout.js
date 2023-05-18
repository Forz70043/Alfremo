import FooterComponent from './FooterComponent';
import NavbarComponent from './Navbar';

export default function PublicLayout({ children }) {
    return (
        <>
            <div>
                <NavbarComponent />
                <main>
                    {children}
                </main>
                <FooterComponent />
            </div>

        </>
    )
}