import {
    Table,
    Avatar,
    Rating
} from "flowbite-react";
import { useState, useEffect } from "react";
import { userService } from "@/services";
import Link from "next/link";


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
        console.log(users)
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
                                        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>
                                        {user.name}
                                    </div>
                                </Table.Cell> */}
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
                                    <Link href={`/users/edit/${user.id}`} className="btn btn-sm btn-primary me-1">Edit</Link>
                                    <button onClick={() => deleteUser(user.id)} className="btn btn-sm btn-danger btn-delete-user" style={{ width: '60px' }} disabled={user.isDeleting}>
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

