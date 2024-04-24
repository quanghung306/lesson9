import React from "react";
import { Button, Table } from "reactstrap";
import { useAppContext } from "../contexts/AppContainer.context";

const TableContainer = () => {
   const appContext = useAppContext();
   const { dataList, onEditChange, onDeleteData } = appContext;
   return (
      <Table hover>
         <thead>
            <tr>
               <th>#</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email</th>
               <th>department</th>
               <th>Position</th>
               <th>Phone Number</th>
               <th>Street</th>
               <th>Action</th>
            </tr>
         </thead>
         <tbody>
            {dataList.map((data, index) => (
               <tr key={data.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.email}</td>
                  <td>{data.department}</td>
                  <td>{data.Position}</td>
                  <td>{data.phone}</td>
                  <td>{data.street}</td>
                  <td>
                  <Button onClick={() => onDeleteData(data.id)}>delete</Button>
                     <Button onClick={() => onEditChange(data)}>Edit</Button>
                  </td>
               </tr>
            ))}
         </tbody>
      </Table>
   );
};

export default TableContainer;
