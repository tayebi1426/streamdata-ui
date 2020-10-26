import React from "react";
import {Button, Card, Checkbox, Field, Fieldset, Form, Row, Select, TextArea} from "../components";
import PersonService from '../service/PersonService'
import ZoneService from '../service/ZoneService'
import ZoneDataList from './zone.json'

const ADD_ACCOUNT_RULES = {
    firstName: 'required',
    lastName: 'required',
    nationalCode: 'required|number',
    birthDate: 'required'
};
const GENDER_DATA = [{id: 1, code: 'm', title: 'Male'}, {id: 2, code: 'f', title: 'Female'}];

class AddPerson extends React.Component {
    initPersonData = {
        firstName: 'hadi',
        lastName: '',
        fatherName: '',
        nationalCode: '1861274629',
        birthDate: new Date(),
        gender: null,
        marriedState: true,
        contact: {
            mobileNumber: '',
            tel: '',
            email: ''
        },
        address: {
            province: null,
            city: null,
            postalCode: NaN,
            fullAddress: ''
        },
        skills: []
    };

    state = {
        cities: []
    }

    componentDidMount() {
        //ZoneService.getProvince().then(provinceList => this.setState({provinceList}));
    }

    onChangeProvince = (e) => {
        this.setState({cities: e.value.cities});
    };
    onSave = (formData) => {
        //console.log(formData);
        //PersonService.save(formData);
    };

    render() {
        return <Card title="employee.info">
            <Form initialValues={this.initPersonData}
                  validationRules={ADD_ACCOUNT_RULES}
                  onSubmit={this.onSave}>
                <Fieldset title="employee.personal_info">
                    <Row>
                        <Field name='firstName' label='person.firstName' type='text'/>
                        <Field name='lastName' label='person.lastName' type='text'/>
                        <Field name='fatherName' label='person.fatherName' type='text'/>
                        <Field name='nationalCode' label='person.nationalCode' type='number'/>
                        <Field name='birthDate' label='person.birthDate' type='date'/>
                        <Field name='gender' label='person.gender'>
                            <Select data={GENDER_DATA} keyField={'id'} textField={'title'}/>
                        </Field>
                        <Field name='marriedState' label={'person.marriedState'}>
                            <Checkbox/>
                        </Field>
                    </Row>
                </Fieldset>
                <Fieldset title="employee.contact_info">
                    <Row>
                        <Field name='contact.mobile' label='contact.mobile' type='text'/>
                        <Field name='contact.tel' label='contact.tel' type='text'/>
                        <Field name='contact.email' label='contact.email' type='text'/>
                    </Row>
                </Fieldset>
                <Fieldset title="employee.address_info">
                    <Row>
                        <Field name='address.province' label='address.province'>
                            <Select data={ZoneDataList} textField='title' onChange={this.onChangeProvince}/>
                        </Field>
                        <Field name='address.city' label='address.city'>
                            <Select data={this.state.cities} textField='title'/>
                        </Field>
                        <Field name='address.postalCode' label='address.postalCode' type='number'/>
                        <Field name='address.fullAddress' label='address.fullAddress'>
                            <TextArea/>
                        </Field>
                    </Row>

                </Fieldset>
<Row>
    <Field name='address.city' label='address.city'>
        <Select data={this.state.cities} textField='title' />
    </Field>
</Row>
                <Button title={'save'}/>
            </Form>
        </Card>
    }
}

export default AddPerson;