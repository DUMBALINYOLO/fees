import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { addSeriesImage } from '../../actions/publications/series';







const AddImage = (props) => {

    const {token} =props;
    const [image, setImage] = useState();

    const saveImage = (e) => {
        e.preventDefault();
        const uploadData = new FormData();
        uploadData.append('series', props.data.id);
        uploadData.append('image', image, image.name);
        props.addSeriesImage(uploadData, token)
        props.imageDialog(false)
        props.getImages(props.data.id, token)
    }


    return (
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-12 p-md-12">
            <input
              accept="image/*"
              type="file"
              name='cover'
              onChange={(evt) => setImage(evt.target.files[0])}
            />
          </div>
          <div className="p-field p-col-12 p-md-6">
            <Button label='SUBMIT' onClick={saveImage}/>
          </div>
          
        </div>
    );
}

const mapStateToProps = state =>({
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {addSeriesImage} )
  (AddImage);
