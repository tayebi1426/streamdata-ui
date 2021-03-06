import gregorianToJalali,{DATE_TIME_FORMAT}  from '../util/gregorianToJalali';
import {digitGrouping} from '../util/CommonUtils'
import React from "react";

const createFormatter = (format, value) => {
    switch (format) {
        case "date":
            return (
                <td>{gregorianToJalali(value)}</td>
            );
        case "dateTime":
            return (
                <td dir={'ltr'}>{gregorianToJalali(value)}</td>
            );
        case "currency":
            return (
                <td>{digitGrouping(value)}</td>
            );
        default:
            return (<td>{value}</td>);
    }
};

export {createFormatter};