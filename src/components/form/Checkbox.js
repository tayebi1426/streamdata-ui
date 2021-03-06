import React from 'react'
import {CustomInput} from 'reactstrap'
import PropTypes from 'prop-types';
import {withTranslation} from '../i18n';

function Checkbox({label,t,value,...restProps}) {
    return <CustomInput label={t(label)} value={value} {...restProps} checked={value}/>
}

Checkbox.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.any,
    name: PropTypes.string,
    className: PropTypes.string,
    checked: PropTypes.bool,
    required: PropTypes.bool,
    step: PropTypes.number,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    errorMessage: PropTypes.string
};

Checkbox.defaultProps = {
    type: 'checkbox'
};

export default withTranslation(Checkbox);
