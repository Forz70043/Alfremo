import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Spinner } from '@/components/Spinner';
import { Layout } from 'components/users';
import { userService } from 'services';
import NavbarComponent from '@/components/Navbar';
import TableComponent from '@/components/TableComponent/TableComponent';

export default Index;

function Index() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
        console.log(users)
    }, []);

    return (
        <>
            <NavbarComponent />
            <section className="dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <h1>Users</h1>
                    <Link href="/users/add" className="btn btn-sm btn-success mb-2">Add User</Link>
                    <TableComponent />
                </div>
            </section>
        </>
    );
}
