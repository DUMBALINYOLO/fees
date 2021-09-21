import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { uuid } from 'uuidv4';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {InputTextarea} from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import {
  getInventoryItems,
} from '../../actions/inventory/inventory';
import {getWarehouses} from '../../actions/inventory/warehouses';
import {getBillSuppliers} from '../../actions/accounts/expenses';
import {addOrder} from '../../actions/inventory/orders'
import Lines from './Items';









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
      validated_by: '',
      expected_receipt_date: '',
      date: '',
      due: '',
      supplier: '',
      ship_to: '',
      notes: '',
      issuing_inventory_controller: '',
      items:  [{ index: uuid(), order_price: "", item:'', quantity: '' }],

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
    this.props.getWarehouses(this.props.token);
    this.props.getBillSuppliers(this.props.token);
    this.props.getInventoryItems(this.props.token);
    this.setState({validated_by: this.props.email});
    this.setState({issuing_inventory_controller: this.props.email});
  };


  onSubmit = (e) => {
    e.preventDefault();
    const {
      validated_by,
      expected_receipt_date,
      date,
      due,
      supplier,
      ship_to,
      notes,
      issuing_inventory_controller,
      items,

    } = this.state;

    const order = {
      validated_by,
      expected_receipt_date,
      date,
      due,
      supplier,
      ship_to,
      notes,
      issuing_inventory_controller,
      items,
    };

    this.props.addOrder(order, this.props.token);
    this.props.productDialog(false);
    this.props.getOrders(this.props.token)
    this.setState({
      validated_by: '',
      expected_receipt_date: '',
      date: '',
      due: '',
      supplier: '',
      ship_to: '',
      notes: '',
      issuing_inventory_controller: '',
      items:  [{ index: uuid(), order_price: "", item:'', quantity: '' }],
     
    });

  };


  handleLineItemChange = (elementIndex) => (event) => {
    let items = this.state.items.map((item, i) => {
      if (elementIndex !== i) return item
      return {...item, [event.target.name]: event.target.value}
    })
    this.setState({items})
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
      items: this.state.items.concat(
        [{  index: uuid(), order_price: "", item:'', quantity: '' }]
      )
    })
  }

  deleteRow = (index) => (event) => {
    this.setState({
      items: this.state.items.filter((item, i) => {
        return index !== i
      })
    })
  }



  handleReorderLineItems = (newLineItems) => {
    this.setState({
      items: newLineItems,
    })
  }

  clickOnDelete(record) {
      this.setState({
        items: this.state.items.filter(r => r !== record)
      });
  }

  handleFocusSelect = (event) => {
    event.target.select()
  }

  
  render() {
    const {
      expected_receipt_date,
      date,
      due,
      supplier,
      ship_to,
      notes,
      items,
    } = this.state;

    const {
      inventoryitems,
    } = this.props;



    return (
      <>
        <div className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-12  p-md-6">
              <label htmlFor="date">DATE</label>
              <Calendar
                  name='date'
                  showIcon
                  onChange={this.handleChange('date')}
                  value={date}
                  dateFormat="yy-mm-dd"
                />
            </div>
            <div className="p-field p-col-12  p-md-6">
              <label htmlFor="due">DUE DATE</label>
              <Calendar
                  name='due'
                  showIcon
                  onChange={this.handleChange('due')}
                  value={due}
                  dateFormat="yy-mm-dd"
                />
            </div>
            <div className="p-field p-col-12  p-md-6">
              <label htmlFor="due">EXPECTED DATE</label>
              <Calendar
                  name='expected_receipt_date'
                  showIcon
                  onChange={this.handleChange('expected_receipt_date')}
                  value={expected_receipt_date}
                  dateFormat="yy-mm-dd"
                />
            </div>
            <div className="p-field p-col-12 p-md-6">
                <label htmlFor="vendor">SUPPLIER</label>
                  <Dropdown
                      value={supplier}
                      optionLabel="name"
                      optionValue="id"
                      name='vendor'
                      options={this.props.billsuppliers}
                      onChange={this.handleChange('supplier')}
                      filter
                      showClear
                      filterBy="name"
                      placeholder="Select a Vendor"
                  />

            </div>
            <div className="p-field p-col-12  p-md-6">
                <label htmlFor="category">WAREHOUSE</label>
                <Dropdown
                  value={ship_to}
                  optionLabel="name"
                  optionValue="id"
                  name='ship_to'
                  options={this.props.warehouses}
                  onChange={this.handleChange('ship_to')}
                  filter
                  showClear
                  filterBy="name"
                  placeholder="Select a Warehouse to Ship to"
              />
            </div>
            <div className="p-field p-col-12 p-md-12">
                <label htmlFor="zip">NOTES</label>
                <InputTextarea
                  value={notes}
                  onChange={this.handleChange('notes')}
                  rows={5}
                  cols={30}
                  autoResize
                />
            </div>
        </div>
        <div style={{ backgroundColor: '#434547'}}>

          <Lines
              items={items}
              addHandler={this.addNewRow}
              changeHandler={this.handleLineItemChange}
              focusHandler={this.handleFocusSelect}
              deleteHandler={this.deleteRow}
              reorderHandler={this.handleReorderLineItems}
              inventoryitems ={this.props.inventoryitems}
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
  warehouses: state.warehouses.warehouses,
  inventoryitems: state.inventory.inventoryitems,
  billsuppliers: state.expenses.billsuppliers,
  email: state.auth.email,
  token: state.auth.token,
})

export default compose(connect(
  mapStateToProps, {
    getWarehouses,
    getBillSuppliers,
    getInventoryItems,
    addOrder
  }),
    withStyles(styles)
)
    (CreateBill);
