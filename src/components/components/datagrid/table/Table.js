import React from "react";
import THeader from "./TableHeader";
import TableBody from "./TableBody";
import DataGridContext from '../DataGridContext';

class Table extends React.Component {

    render() {
        let {schema, data} = this.context;
        let {className} = this.props;
        return <React.Fragment>
            <table className={className}>
                <THeader schema={schema}/>
                <TableBody schema={schema} data={data}/>
                <tfoot/>
            </table>
        </React.Fragment>
    }
}

Table.contextType = DataGridContext;
Table.defaultProps = {
    className: "table table-hover table-bordered"
};

export default Table;