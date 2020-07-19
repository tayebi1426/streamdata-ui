import React from "react";
import {Button, Card, Checkbox, Field, Form,  Row, Select, TextArea} from "../components";
import PersonService from '../service/PersonService'
import ZoneService from '../service/ZoneService'


const ADD_ACCOUNT_RULES = {
    firstName: 'required',
    lastName: 'required',
    nationalCode: 'required|number',
    birthDate: 'required'
};
const GENDER_DATA = [{id: 1, title: 'Male'}, {id: 2, title: 'Female'}];

class AddPerson extends React.Component {
    initPersonData = {firstName: 'hadi', lastName: '', nationalCode: '1861274629', birthDate: new Date(),gender:GENDER_DATA[0],marriedState:true};

    state={
        provinceList:[],
        cityList:[]
    };
    componentDidMount() {
        ZoneService.getProvince().then(provinceList=>this.setState({provinceList}));
    }

    onSave = (formData) => {
        console.log(formData);
        PersonService.save(formData);
    };

    render() {
        return <Card>
            <Form initialValues={this.initPersonData}
                  validationRules={ADD_ACCOUNT_RULES}
                  onSubmit={this.onSave}>
                <Row>
                    <Field name='firstName' label={'person.firstName'} type='text'/>
                    <Field name='lastName' label={'person.lastName'} type='text'/>
                    <Field name='nationalCode' label={'person.nationalCode'} type='number'/>
                    <Field name='birthDate' label={'person.birthDate'} type='date'/>
                    <Field name='gender' label={'person.gender'}>
                        <Select data={GENDER_DATA} keyField={'id'} textField={'title'}/>
                    </Field>
                </Row>
                <Row>
                    <Field name='marriedState' label={'person.marriedState'}>
                        <Checkbox/>
                    </Field>
                </Row>
                <Row>
                    <Field name='province' label='province'>
                        <Select data={this.state.provinceList} textField='title'/>
                    </Field>
                </Row>
                <Row>
                    <Field name='description' label={'person.description'}>
                        <TextArea/>
                    </Field>
                </Row>

                <Button title={'save'}/>
            </Form>
        </Card>
    }
}

export default AddPerson;