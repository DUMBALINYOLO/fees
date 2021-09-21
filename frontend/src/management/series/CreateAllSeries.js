import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { uuid } from 'uuidv4';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {InputTextarea} from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import {getAuthors} from '../../actions/users/authors';
import {getGenres} from '../../actions/publications/genres';
import {addAllSeries} from '../../actions/publications/allseries';
import PaymentPlans from './PaymentPlans';
import './styles.css';







const styles = {
  whitePaper: {
    background: '#A9A9A9',
    color: 'yellow',
    minWidth: 800,
    border: '1px solid #dedede'
  }
};


class CreateSeries extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cover: null,
      title: '',
      author: '',
      genre: '',
      hardcopy_read_price: '',
      version: '',
      published: '',
      description: '',
      pricing_plans:  [{ index: uuid(), durationability: "", online_read_price:'' }],

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
    this.props.getAuthors(this.props.token);
  };


  onSubmit = (e) => {
    e.preventDefault();
    const {
      cover,
      title,
      author,
      genre,
      hardcopy_read_price,
      version,
      published,
      description,
      pricing_plans,

    } = this.state;

    const uploadData = new FormData();
    uploadData.append('genre', this.props.id);
    uploadData.append('title', title);
    uploadData.append('author', author);
    uploadData.append('hardcopy_read_price', hardcopy_read_price);
    uploadData.append('published', published);
    uploadData.append('version', version);
    uploadData.append('description', description);
    uploadData.append('pricing_plans', pricing_plans);
    uploadData.append('cover', cover, cover.name);
    // this.props.addAllSeries(uploadData, this.props.token);
    console.log(uploadData)
    this.setState({
      title: '',
      author: '',
      genre: '',
      hardcopy_read_price: '',
      version: '',
      published: '',
      description: '',
      pricing_plans:  [{ index: uuid(), durationability: "", online_read_price:'' }],
    });

  };


  handleLineItemChange = (elementIndex) => (event) => {
    let pricing_plans = this.state.pricing_plans.map((item, i) => {
      if (elementIndex !== i) return item
      return {...item, [event.target.name]: event.target.value}
    })
    this.setState({pricing_plans})
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
      pricing_plans: this.state.pricing_plans.concat(
        [{  index: uuid() , durationability: "", online_read_price:''  }]
      )
    })
  }

  deleteRow = (index) => (event) => {
    this.setState({
      pricing_plans: this.state.pricing_plans.filter((item, i) => {
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
    const { classes } = this.props;
    const {
      title,
      author,
      cover,
      hardcopy_read_price,
      version,
      published,
      description,
      pricing_plans,
    } = this.state;

    const {
      authors,
      genres
    } = this.props;



    return (
      <>
        <div className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-12 p-md-6">
                <label htmlFor="title">TITLE</label>
                <InputText
                    id="title"
                    type="text"
                    value={title}
                    name="title"
                    onChange={this.handleChange('title')}
                    required
                    autoFocus
                />
            </div>
            <div className="p-field p-col-12 p-md-6">
                <label htmlFor="authors">AUTHOR</label>
                  <Dropdown
                      value={author}
                      optionLabel="username"
                      optionValue="id"
                      name="author"
                      options={authors}
                      onChange={this.handleChange('author')}
                      filter
                      showClear
                      filterBy="username"
                      placeholder="Select an Author"
                  />

            </div>
            <div className="p-field p-col-12  p-md-6">
                <label htmlFor="address">PUBLISHED DATE</label>
                <Calendar
                    name='published'
                    showIcon
                    onChange={this.handleChange('published')}
                    value={published}
                    dateFormat="yy-mm-dd"
                  />
            </div>
            <div className="p-field p-col-12 p-md-6">
                <label htmlFor="title">VERSION</label>
                <InputText
                    id="version"
                    type="text"
                    value={version}
                    onChange={this.handleChange('version')}
                    required
                    autoFocus
                />
            </div>
            <div className="p-field p-col-12 p-md-6">
              <span className="p-float-label p-input-icon-right">

                <InputText
                    id="hardcopy_read_price"
                    type="number"
                    value={hardcopy_read_price}
                    onChange={this.handleChange('hardcopy_read_price')}
                    required
                    autoFocus
                />

                </span>
            </div>
            <div className="p-field p-col-12 p-md-6">
              <input
                accept="image/*"
                type="file"
                name='cover'
                onChange={(evt) => this.setState({cover: evt.target.files[0]})}
              />
          </div>

            <div className="p-field p-col-12 p-md-12">
                <label htmlFor="zip">CONTENT</label>
                <InputTextarea
                  value={description}
                  onChange={this.handleChange('description')}
                  rows={5}
                  cols={30}
                  autoResize
                />
            </div>
            

        </div>

        <div style={{ backgroundColor: '#434547'}}>

          <PaymentPlans
              items={pricing_plans}
              addHandler={this.addNewRow}
              changeHandler={this.handleLineItemChange}
              focusHandler={this.handleFocusSelect}
              deleteHandler={this.deleteRow}
              reorderHandler={this.handleReorderLineItems}
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
  authors: state.authors.authors,
  email: state.auth.email,
  token: state.auth.token,
})

export default compose(connect(
  mapStateToProps, {
    getAuthors,
    getGenres,
    addAllSeries,
   }),
    withStyles(styles)
)
    (CreateSeries);
