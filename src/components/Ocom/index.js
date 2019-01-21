//Dependencies
import React, {Component} from 'react';
import { Button, Table } from 'react-bootstrap';

import '../Global/css/general.css';

class Ocom extends Component{
        render(){
            return(
                <div>
                    <h1>Pagina para Orden de Compra</h1>
                    <div className="add" ><Button bsStyle="primary" >+</Button></div>
                    <Table border="1" striped bordered condensed hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Proveedor</th>
                            <th>Area</th>
                            <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>11/09/2010</td>
                            <td>Otto</td>
                            <td>Area 1</td>
                            <td>1500.00</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>11/09/2010</td>
                            <td>Jacob</td>
                            <td>Area 2</td>
                            <td>20500.50</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>11/09/2010</td>
                            <td>Anabel</td>
                            <td>Area 3</td>
                            <td>68.30</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            );
        }
}
 export default Ocom;