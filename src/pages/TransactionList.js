import React from "react";
import {
    Button,
    Card,

    EditCommand,
    GridCommand,
    GridCommands,
    GridToolbar,
    withTranslation
} from "../components";
import {DataGrid,GridColumn}  from "../components/components/datagrid";

class AccountList extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Card title="TransactionList">
                    <DataGrid readUrl={'http://localhost:9001/transaction/list'}
                              editField="inEdit"
                              showIndex={true}
                              selectionMode={true}>
                        <GridToolbar>
                            <Button title={'selected'} onClick={this.getSelectedItems}/>
                        </GridToolbar>

                        <GridColumn field="ProductID" title="product.id" />
                        <GridColumn field="ProductName" title="product.name" format={'currency'}/>
                        <GridColumn field="UnitsInStock" title="product.name" />
                        <GridCommands>
                            <EditCommand/>
                            <GridCommand icon="trash-alt" title="delete"/>
                        </GridCommands>
                    </DataGrid>
                </Card>
            </React.Fragment>
        );
    }
}

export default withTranslation(AccountList);