import React, { Component } from "react";
import {Button,
Modal,
ModalHeader,
ModalBody,
Form,
FormGroup,
Label,
Input
} from 'reactstrap';
import Container from "reactstrap/lib/Container";
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';




class PopUp extends Component {

state = {
    modal: false,
    name: '',
    area: '',
    description: '',
    category: ''
}

toggle = () => {
    this.setState({
modal: !this.state.modal
    });
} ;

onChange = e => {
    this.setState({[e.target.name]: e.target.value});
    this.setState({[e.target.area]: e.target.value});
    this.setState({[e.target.category]: e.target.value});
    this.setState({[e.target.description]: e.target.value});
};

onSubmit = e => {
    e.preventDefault();


    const newItem = {
      
        
        name: this.state.name,
        area: this.state.area,
        category: this.state.category,
        description: this.state.description
        

    }

    this.props.addItem(newItem);


    this.toggle();
}
render() {
    return(
        <div>

            <Button color="dark" style={{marginTop: '1rem'}}  onClick={this.toggle}> Add Job Post </Button>

        <Container>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To EventList</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='item'>Job Title</Label>
                <Input type='text' name='name'id='name'placeholder='Add Event'onChange={this.onChange} style={{marginBottom:'0.8rem'}}/>
                <Label for='item'>Description</Label>
                <Input type='text' name='description'id='description'placeholder='Add Description'onChange={this.onChange}/>
                <Label for='item'style={{marginTop:'0.8rem'}}>Area</Label>
                
                 <div className="form-group">
                          <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name='area'
                            id='area'
                            value="North-Denmark"
                            checked={this.state.area==='North-Denmark'} 
                            onChange={this.onChange}
                          />

                            <label className="form-check-label">North Denmark</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name='area'
                            id='area'
                            value="Midjutland"
                            checked={this.state.area==='Midjutland'} 
                            onChange={this.onChange}
                          />

                            <label className="form-check-label">Midjutland</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name='area'
                            id='area'
                            value="Jutland" 
                            checked={this.state.area ==='Jutland'} 
                            onChange={this.onChange}
                          />

                            <label className="form-check-label">Jutland</label>
                        </div>

                        <FormGroup>
                        <Label for='item'style={{marginTop:'0.8rem'}}>Category</Label>

                <Input type="select" name="category" id="category" onChange={this.onChange} > 
            <option   type="select"
                            
                            value="IT"
                            >IT</option>
            <option  type="select"
                          
                            value="Design" 
                          >Design</option>
            <option  type="select"
                           
                            value="Sales" 

                            >Sales</option>
            <option type="select"
                          
                            value="Architecture"
                          >Architecture</option>
            <option  type="select"
                            
                            value="Hospital"
                            >Hospital</option>
          </Input>
        </FormGroup>



                        </div>
                        <div className ="form-group"></div>
                <Button color='dark' style={{ marginTop: '2rem' }} block>Add Event
                </Button>
                
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
        </Container>
        </div>
    );

}
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, {addItem}) (PopUp);