import Header from './Header'
import NavbarComponent from './Navbar';

export default function Layout({children}){
    
    return (
        <>
        <Header title="Alfremo"/>
        <NavbarComponent currentPage={children.type.name.toLowerCase()} titleBrand="Alfremo" />
        <main>
            {children}
        </main>
        
        </>
    )
}