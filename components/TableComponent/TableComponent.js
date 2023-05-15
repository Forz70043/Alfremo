import {Table} from "flowbite-react";
import TableHeadComponent from "./TableHeadComponent";
import TableBodyComponent from "./TableBodyComponent";

export default function TableComponent(props){
    return(
        <>
            <Table id={props.id ?? 'tableDraft'} hoverable={true}>
                <TableHeadComponent />
                <TableBodyComponent />
            </Table>
        </>
    )
}