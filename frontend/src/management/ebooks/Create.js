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
import { addAllEbook } from '../../actions/publications/allebooks';



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
    const [version, setVersion] = useState(0)
    const [published, setPublished] = useState(null)
    const [description, setDescription] = useState(null)
    const [genre, setGenre] = useState(props.id)

    useEffect(() => {
        if(!props.fetched) {
            props.getAuthors(props.token)
        }
        console.log('mount it!');

    }, []);


      const saveSeries = (e) => {
        e.preventDefault();
        let uploadData = {
            genre,
            title,
            author,
            published,
            version,
            description,
            cover
        }
        props.addAllEbook(uploadData, props.token);
        props.getEbooks(props.id, props.token)
        props.seriesDialog(false)
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }
  
  
      const handleFileRead = async (event) => {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        setCover(base64)
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
                    <InputText
                        name='published'
                        type="date"
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
                    <input
                        accept="image/*"
                        type="file"
                        name='cover'
                        onChange={(evt) => handleFileRead(evt)}
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
    addAllEbook ,
}),
    withStyles(styles)
)
    (CreateSeries);
