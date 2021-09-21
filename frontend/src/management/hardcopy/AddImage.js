import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { addHardCopyImage } from '../../actions/publications/onceoffs';







const AddImage = (props) => {

    const {token} =props;
    const [image, setImage] = useState();
    const [hardcopy, setHardcopy] = useState(props.data.id);

    const saveImage = (e) => {
        e.preventDefault();

        const uploadData = {
          image,
          hardcopy
        }
        props.addHardCopyImage(uploadData, token)
        props.imageDialog(false)
        props.getImages(props.data.id, token)
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
      setImage(base64)
    }


    return (
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-12 p-md-12">
            <input
              accept="image/*"
              type="file"
              name='cover'
              onChange={(evt) => handleFileRead(evt)}
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
  {addHardCopyImage} )
  (AddImage);
