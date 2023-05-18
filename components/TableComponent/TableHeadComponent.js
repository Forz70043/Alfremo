import { Table, Checkbox } from "flowbite-react";

const tableColumns = [
    'Email',
    'First Name',
    'Last Name',
    'Status',
    'Action'
]

export default function TableHeadComponent() {
    return (
        <>
            <Table.Head>
                <Table.HeadCell className="!p-4">
                    <Checkbox />
                </Table.HeadCell>
                {tableColumns.map((tableColumn, index) => <Table.HeadCell key={index}>{tableColumn}</Table.HeadCell>)}
            </Table.Head>
        </>
    )
}