import { useRouter } from 'next/router';
import FooterComponent from './FooterComponent';
import NavbarComponent from './Navbar';

export default function PublicLayout({ children }) {
    const router = useRouter();
    let pathRoute = router.pathname.toLocaleLowerCase();
    
    return (
        <>
            <div>
                <NavbarComponent currentPage={pathRoute}/>
                <main>
                    {children}
                </main>
                <FooterComponent />
            </div>

        </>
    )
}