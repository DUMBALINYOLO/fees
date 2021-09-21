import React, { useState } from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import {RadioButton} from 'primereact/radiobutton';
import {Dropdown} from 'primereact/dropdown';
import {InputTextarea} from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';


const CreateAdvert = (props) => {

  const {
      title,
      category,
      description,
      image,
      startDate,
      endDate,
      setTitle,
      setCategory,
      setDescription,
      setImage,
      setStartDate,
      setEndDate,
      categories,
    } = props;

    return (
        <div>
          <div className="p-fluid p-formgrid p-grid">
              <div className="p-field p-col-12 p-md-6">
                  <label htmlFor="title">TITLE</label>
                  <InputText
                      id="title"
                      type="text"
                      value={title}
                      onChange={(evt) => setTitle(evt.target.value)}
                      required
                      autoFocus
                  />
              </div>
              <div className="p-field p-col-12 p-md-6">
                  <label htmlFor="category">Lastname</label>
                    <Dropdown
                        value={category}
                        optionLabel="value"
                        optionValue="key"
                        options={categories}
                        onChange={(evt) => setCategory(evt.target.value)}
                        filter
                        showClear
                        filterBy="value"
                        placeholder="Select a Category"

                      />

              </div>
              <div className="p-field p-col-12  p-md-6">
                  <label htmlFor="address">START DATE</label>
                  <Calendar
                      showIcon
                      onChange={(evt) => setStartDate(evt.target.value)}
                      value={startDate}
                      dateFormat="yy-mm-dd"
                    />
              </div>
              <div className="p-field p-col-12 p-md-6">
                  <label htmlFor="city">END</label>
                    <Calendar
                        showIcon
                        onChange={(evt) => setEndDate(evt.target.value)}
                        value={endDate}
                        dateFormat="yy-mm-dd"
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
              <div className="p-field p-col-12 p-md-12">
                  <input
                    accept="image/*"
                    type="file"
                    name='image'
                    onChange={(evt) => setImage(evt.target.files[0])}
                  />

              </div>
          </div>
      </div>
    )
};

export default CreateAdvert;
