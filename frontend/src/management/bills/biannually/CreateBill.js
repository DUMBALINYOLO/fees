import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { uuid } from 'uuidv4';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {InputTextarea} from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import {
  getBillSuppliers, 
  addBiAnnuallyUnverifiedBill 
} from '../../../actions/accounts/expenses';
import {getAccounts} from '../../../actions/accounts/accounts';
import Lines from './Lines';









const styles = {
  whitePaper: {
    background: '#A9A9A9',
    color: 'yellow',
    minWidth: 800,
    border: '1px solid #dedede'
  }
};

const billCategoryOptions = [
    {key: 18, value: 'ADVERTISING'},
    {key: 1, value: 'BANK SERVICE CHARGES'},
    {key: 2, value: 'DUES AND SUBSCRIPTIONS'},
    {key: 3, value: 'EQUIPMENT_RENTAL'},
    {key: 4, value: 'TELEPHONE'},
    {key: 5, value: 'VEHICLES'},
    {key: 6, value: 'TRAVEL AND EXPENSES'},
    {key: 7, value: 'SUPPLIES'},
    {key: 8, value: 'SALARIES AND WAGES'},
    {key: 9, value: 'RENT'},
    {key: 10, value: 'PAYROLL TAXES'},
    {key: 11, value: 'LEGAL AND ACCOUNTING'},
    {key: 12, value: 'INSURANCE'},
    {key: 13, value: 'OFFICE EXPENSES'},
    {key: 14, value: 'CARRIAGE OUTWARDS'},
    {key: 15, value: 'TRAINING'},
    {key: 16, value: 'VENDOR SERVICES'},
    {key: 17, value: 'OTHER'},
]







class CreateBill extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      recorded_by: '',
      category: '',
      vendor: '',
      date: '',
      due: '',
      memo: '',
      lines:  [{ index: uuid(), debit_account: "", amount:'' }],

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
    this.props.getAccounts(this.props.token);
    this.props.getBillSuppliers(this.props.token);
    this.setState({recorded_by: this.props.email});
    console.log(this.state.recorded_by)
  };


  onSubmit = (e) => {
    e.preventDefault();
    const {
      recorded_by,
      category,
      vendor,
      date,
      due,
      memo,
      lines,

    } = this.state;

    const bill = {
      recorded_by,
      category,
      vendor,
      date,
      due,
      memo,
      lines,
    };

    this.props.addBiAnnuallyUnverifiedBill(bill, this.props.token);
    this.props.productDialog(false);
    this.setState({
      recorded_by: '',
      category: '',
      vendor: '',
      date: '',
      due: '',
      memo: '',
      lines:  [{ index: uuid(), debit_account: "", amount:'' }],
     
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
        [{  index: uuid(), debit_account: "", amount:'' }]
      )
    })
  }

  deleteRow = (index) => (event) => {
    this.setState({
      lines: this.state.lines.filter((item, i) => {
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

  calcLineItemsTotal = () => {
    return this.state.lines.reduce((prev, cur) => (prev + cur.weight), '')
  }

  calcGrandTotal = () => {
    return this.calcLineItemsTotal()
  }

  render() {
    const {
      category,
      vendor,
      date,
      due,
      memo,
      lines,
    } = this.state;






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
            <div className="p-field p-col-12 p-md-6">
                <label htmlFor="vendor">VENDOR</label>
                  <Dropdown
                      value={vendor}
                      optionLabel="name"
                      optionValue="id"
                      name='vendor'
                      options={this.props.billsuppliers}
                      onChange={this.handleChange('vendor')}
                      filter
                      showClear
                      filterBy="name"
                      placeholder="Select a Vendor"
                  />

            </div>
            <div className="p-field p-col-12  p-md-6">
                <label htmlFor="category">CATEGORY</label>
                <Dropdown
                  value={category}
                  optionLabel="value"
                  optionValue="key"
                  name='category'
                  options={billCategoryOptions}
                  onChange={this.handleChange('category')}
                  filter
                  showClear
                  filterBy="value"
                  placeholder="Select a Category"
              />
            </div>
            <div className="p-field p-col-12 p-md-12">
                <label htmlFor="zip">MEMO</label>
                <InputTextarea
                  value={memo}
                  onChange={this.handleChange('memo')}
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
              accounts ={this.props.accounts}
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
  accounts: state.accounts.accounts,
  billsuppliers: state.expenses.billsuppliers,
  email: state.auth.email,
  token: state.auth.token,
})

export default compose(connect(
  mapStateToProps, {
    getAccounts,
    getBillSuppliers,
    addBiAnnuallyUnverifiedBill,
    
   }),
    withStyles(styles)
)
    (CreateBill);
