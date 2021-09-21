import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { getAuthors } from '../../actions/users/authors';
import { addAllSeries } from '../../actions/publications/allseries';
import { ListItemSecondaryAction } from '@material-ui/core';




const styles = {
    whitePaper: {
        background: '#A9A9A9',
        color: 'yellow',
        minWidth: 800,
        border: '1px solid #dedede'
    }
};


const CreateSeries = props => {
    const [cover, setCover] = useState()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState(null)
    const [hardcopy_read_price, setOnlineReadPrice] = useState(0)
    const [version, setVersion] = useState(0)
    const [published, setPublished] = useState(null)
    const [description, setDescription] = useState(null)

    useEffect(() => {
        if(!props.fetched) {
            props.getAuthors(props.token)
        }
        console.log('mount it!');

      }, []);


      const saveSeries = (e) => {
        e.preventDefault();
        let uploadData = new FormData();
        uploadData.append('genre', props.id);
        uploadData.append('title', title);
        uploadData.append('author', author);
        uploadData.append('hardcopy_read_price', hardcopy_read_price);
        uploadData.append('published', published);
        uploadData.append('version', version);
        uploadData.append('description', description);
        uploadData.append('cover', cover, cover.name);
        props.addAllSeries(uploadData, props.token);
        console.log(props.token)
        props.getSeries(props.id)
        props.seriesDialog(false)
    }



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
                        onChange={(evt) => setTitle(evt.target.value)}
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
                        options={props.authors}
                        onChange={(evt) => setAuthor(evt.target.value)}
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
                        onChange={(evt) => setPublished(evt.target.value)}
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
                        onChange={(evt) => setVersion(evt.target.value)}
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
                            onChange={(evt) => setOnlineReadPrice(evt.target.value)}
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
                        onChange={(evt) => setCover(evt.target.files[0])}
                    />
                </div>

                <div className="p-field p-col-12 p-md-12">
                    <label htmlFor="zip">CONTENT</label>
                    <InputTextarea
                        value={description}
                        onChange={(evt) => setDescription(evt.target.value)}
                        rows={5}
                        cols={30}
                        autoResize
                    />
                </div>


            </div>

            <div className="p-field p-col-12 p-md-2">

                <Button label="SUBMIT" onClick={saveSeries} />
            </div>

        </>
    );
}


const mapStateToProps = state => ({
    authors: state.authors.authors,
    email: state.auth.email,
    token: state.auth.token,
})

export default compose(connect(
    mapStateToProps, {
    getAuthors,
    addAllSeries,
}),
    withStyles(styles)
)
  (CreateSeries);
