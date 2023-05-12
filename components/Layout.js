import { ThemeProvider } from 'next-themes'
import Header from './Header'
import FooterComponent from './FooterComponent';
import NavbarComponent from './Navbar';
import { userService } from 'services';
import SidebarComponent from './Sidebar';


export default function Layout({ children }) {

    return (
        <>
            <ThemeProvider attribute="class">
                <Header title="Alfremo" />
                <NavbarComponent />
                {userService.userValue ?
                    <div class="antialiased bg-gray-50 dark:bg-gray-900">
                        <SidebarComponent />
                        <main class="p-4 md:ml-64 h-auto pt-20">
                            {children}
                        </main>
                    </div>
                    :
                    <main>
                        {children}
                    </main>
                }

                <FooterComponent />
                {/* {<NavbarComponent currentPage={children.type.name.toLowerCase()} titleBrand="Alfremo" />} */}
            </ThemeProvider>
        </>
    )
}