import React from "react";
import {
    Button,
    Card,
    DataGrid,
    EditCommand,
    GridColumn,
    GridCommand,
    GridCommands,
    GridSearchForm,
    GridToolbar,
    withTranslation
} from "../../components";

import GridSearchField from "../../components/components/grid/GridSearchField";

const gridData = [
    {id: 1234234, name: 'A-15', creationDate: new Date()},
    {
        id: 2,
        name: 'B-63455555ثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثثبببببببببببببببببببببببببببببببببببببببببببببببببببب',
        inEdit: true
    },
    /*    {id: 3, name: 'B-7'},
        {id: 4, name: 'B-8'},
        {id: 5, name: 'B-9'},
        {id: 6, name: 'B-10'},
        {id: 7, name: 'B-11'},
        {id: 8, name: 'B-12'},
        {id: 9, name: 'B-13'},
        {id: 10, name: 'B-14'},
        {id: 11, name: 'B-15'},
        {id: 13, name: 'B-16'}*/
];

function NameCell(props) {
    const value = props.dataItem[props.field];
    let cellValue = value;
    if (value === 'A-15') {
        cellValue = 'Rasool';
        return <td style={{color: 'red'}}> {cellValue}</td>
    }
    return cellValue;
}

class GridUi extends React.Component {

    handleEditItem = (dataItem, dataIndex) => {
        console.log('handleEditItem : ', dataItem);
    };
    handleDeleteItem = (dataItem, dataIndex) => {
        console.log('dataItem : ', dataItem);
    };
    nameCell = (props) => {
        const cellValue = props.dataItem[props.field];
        return <td><Button link={true} title={cellValue}/></td>;
    };
    searchForm = () => {
        return (
            <GridSearchForm title={'جستجو'}>
                <GridSearchField title={'name'} operator={'aeq'} name={"name"}/>
                <GridSearchField title={'code'} operator={'contains'} name={"code"}/>
            </GridSearchForm>
        );
    };
    getSelectedItems = (e, selectedItems) => {
        console.log('selectedItems', selectedItems)
    };

    constructor(props) {
        super(props);
        this.state = {skip: 0, take: 10, searchObject: {}};
        this.bindGridData = this.bindGridData.bind(this);
    }

    bindGridData() {
        this.setState({fetchData: true, readUrl: 'https://localhost:7002/acc-ws/test/bankList'});
    }

    render() {

        return (
            <React.Fragment>

                {/*<Button onClick={this.bindGridData}/>*/}

                <Card title="Sample Grid">
                    <DataGrid localData={gridData} editField="inEdit"
                              searchForm={this.searchForm()} showIndex={true} selectionMode={true}>
                        <GridToolbar>
                            <Button title={'selected'} onClick={this.getSelectedItems}/>
                        </GridToolbar>

                        <GridColumn field="id" title="product.id" format={'currency'}/>
                        <GridColumn field="name" title="product.name" render={this.nameCell}/>
                        <GridColumn field="creationDate" title="product.name" format={'dateTime'}/>
                        <GridCommands>
                            <EditCommand onClick={this.handleEditItem}/>
                            <GridCommand icon="trash-alt" title="delete"
                                         onClick={dataItem => this.handleDeleteItem(dataItem)}/>
                        </GridCommands>
                    </DataGrid>
                </Card>
            </React.Fragment>
        );
    }

}

export default withTranslation(GridUi);