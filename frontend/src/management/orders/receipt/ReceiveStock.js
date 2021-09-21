import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { uuid } from 'uuidv4';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {InputTextarea} from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import {receiveStock} from '../../../actions/inventory/orders'
import Lines from './Lines';









const styles = {
  whitePaper: {
    background: '#A9A9A9',
    color: 'yellow',
    minWidth: 800,
    border: '1px solid #dedede'
  }
};








class CreateBill extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      order: '',
      received_by: '',
      receive_date: '',
      note: '',
      lines:  [{ index: uuid(), line:'', quantity: 0 }],

    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.handleChangeTable = this.handleChangeTable.bind(this);
    this.addNewRow = this.addNewRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.handleLineItemChange = this.handleLineItemChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  componentDidMount() {
    this.setState({received_by: this.props.email});
    this.setState({order: this.props.data.id});
  };


  onSubmit = (e) => {
    e.preventDefault();
    const {
      order,
      received_by,
      receive_date,
      note,
      lines,

    } = this.state;

    const stock = {
      order,
      received_by,
      receive_date,
      note,
      lines,
    };

    this.props.receiveStock(this.props.data.id, stock, this.props.token);
    // this.props.productDialog(false);
    this.setState({
      order: '',
      received_by: '',
      receive_date: '',
      note: '',
      lines:  [{ index: uuid(), line:'', quantity: 0 }],
     
    });

  };


  handleLineItemChange = (elementIndex) => (event) => {
    let lines = this.state.lines.map((item, i) => {
      if (elementIndex !== i) return item
      return {...item, [event.target.name]: event.target.value}
    })
    this.setState({lines})
  }


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };



  handleChangeTable = (name, id) => event => {
    this.updateItem(id, { [name]: event.target.value });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });




  addNewRow = (event) => {
    this.setState({
      // use optimistic uuid for drag drop; in a production app this could be a database id
      lines: this.state.lines.concat(
        [{ index: uuid(), line:'', quantity: 0 }],
      )
    })
  }

  deleteRow = (index) => (event) => {
    this.setState({
      items: this.state.lines.filter((item, i) => {
        return index !== i
      })
    })
  }



  handleReorderLineItems = (newLineItems) => {
    this.setState({
      lines: newLineItems,
    })
  }

  clickOnDelete(record) {
      this.setState({
        lines: this.state.lines.filter(r => r !== record)
      });
  }

  handleFocusSelect = (event) => {
    event.target.select()
  }

  
  render() {
    const {
      receive_date,
      note,
      lines
    } = this.state;




    return (
      <>
        <div className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-12  p-md-12">
              <label htmlFor="date">DATE</label>
              <Calendar
                  name='receive_date'
                  showIcon
                  onChange={this.handleChange('receive_date')}
                  value={receive_date}
                  dateFormat="yy-mm-dd"
                />
            </div>
            <div className="p-field p-col-12 p-md-12">
                <label htmlFor="zip">NOTE</label>
                <InputTextarea
                  value={note}
                  onChange={this.handleChange('note')}
                  rows={5}
                  cols={30}
                  autoResize
                />
            </div>
        </div>
        <div style={{ backgroundColor: '#434547'}}>

          <Lines
              items={lines}
              addHandler={this.addNewRow}
              changeHandler={this.handleLineItemChange}
              focusHandler={this.handleFocusSelect}
              deleteHandler={this.deleteRow}
              reorderHandler={this.handleReorderLineItems}
              orderitems ={this.props.orderitems}
            />
        </div>

        <div className="p-field p-col-12 p-md-2">

          <Button label="SUBMIT" onClick={this.onSubmit} />
        </div>

      </>
    );
  }
}


const mapStateToProps = state =>({
  email: state.auth.email,
  token: state.auth.token,
})

export default compose(connect(
  mapStateToProps, {
    receiveStock
  }),
    withStyles(styles)
)
    (CreateBill);
