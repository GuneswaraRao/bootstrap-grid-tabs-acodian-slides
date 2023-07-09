import React from 'react'
import { Button, Table, ButtonGroup } from "react-bootstrap";

const Tabledata = () => {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>
                        <i className="far fa-search"></i> #
                    </th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <Button variant="primary">Primary</Button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="primary">Left</Button>

                            <Button variant="danger">Right</Button>
                        </ButtonGroup>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="primary">Left</Button>
                            <Button variant="secondary">Middle</Button>
                            <Button variant="danger">Right</Button>
                        </ButtonGroup>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="primary">Aprove</Button>
                            <Button variant="secondary">Pendding</Button>
                            <Button variant="danger">Reject</Button>
                            <Button variant="success">Action</Button>
                        </ButtonGroup>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};
export default Tabledata;
