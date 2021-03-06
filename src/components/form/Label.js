import React from "react";
import PropTypes from "prop-types";
import {Label as BsLabel} from "reactstrap";
import I18Massage from "../i18n/I18Massage";

function Label({children, code, ...restProps}) {
    if (!code) {
        return null;
    }
    return <BsLabel {...restProps}>
        {code && <I18Massage code={code}/>}
        {children}
    </BsLabel>
}

Label.propTypes = {
    code: PropTypes.string.isRequired,
    htmlFor: PropTypes.string,
    className: PropTypes.string
};

Label.defaultProps = {
    className: 'x-label'
};

export default Label;