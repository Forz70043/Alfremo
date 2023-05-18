import {
    Table,
    Checkbox
} from "flowbite-react";
import { useState, useEffect } from "react";
import { userService } from "@/services";
import Link from "next/link";
import { Spinner } from '@/components/Spinner';



export default function TableBodyComponent() {

    const [users, setUsers] = useState(null);
    
    function deleteUser(id) {
        setUsers(users.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        userService.delete(id).then(() => {
            setUsers(users => users.filter(x => x.id !== id));
        });
    }

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
        // console.log(users)
    }, []);

    return (
        <>
            <Table.Body className="divide-y">
                {users?.map((user, index) => {
                    return (
                        <>
                            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    <div className="flex flex-wrap gap-2">
                                        <Avatar img="http://localhost:3000/docs/images/people/profile-picture-5.jpg" rounded={true}/>
                                        {user.name}
                                    </div>
                                </Table.Cell> */}
                                <Table.Cell className="!p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="flex items-center">
                                        {user.email}
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="flex items-center">
                                        {user.firstName}
                                    </div>
                                </Table.Cell>
                                <Table.Cell>{user.lastName}</Table.Cell>
                                <Table.Cell>
                                    <div className="flex items-center">
                                    {user.status === 'online' ? <div className="inline-block w-4 h-4 mr-2 bg-green-600 rounded-full"></div>
                                    : <div className="inline-block w-4 h-4 mr-2 bg-red-600 rounded-full"></div>}
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link type="button" href={`/users/edit/${user.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 me-1">Edit</Link>
                                    <button onClick={() => deleteUser(user.id)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" style={{ width: '90px' }} disabled={user.isDeleting}>
                                        {user.isDeleting
                                            ? <span className="spinner-border spinner-border-sm"></span>
                                            : <span>Delete</span>
                                        }
                                    </button>
                                </Table.Cell>

                            </Table.Row>
                        </>
                    )
                })}
            </Table.Body>
        </>
    )
}

