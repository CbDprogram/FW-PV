import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

class EventList extends Component {

    componentDidMount (){
        this.props.getItems();
    }

    onDeleteClick =  id => {
        this.props.deleteItem(id);
    }
render () {
    
    const { items } = this.props.item;
    return (
        <Container>


<ListGroup>
    <TransitionGroup className="event-list">
        {items.map(({ _id, name, description , area, category  }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem style={{marginTop: '1rem'}}>
                    

<Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Job Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Area</th>
        
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td> {name}</td>
            <td>{description}</td>
            <td>{category} </td>
            <td>{area}</td>
        
          </tr>
          </tbody>
          </Table>
          <Button className="remove-btn"
                     color="danger" 
                     size="sm" 
                     onClick={this.onDeleteClick.bind (this, _id)}
                    > &times;</Button>
                </ListGroupItem>
                </CSSTransition>
        ))}
    </TransitionGroup>
</ListGroup>
        </Container>
    );
}

}

EventList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
    item: state.item
});
export default connect(mapStateToProps, {getItems, deleteItem}) (EventList);