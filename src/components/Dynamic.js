import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Dynamic.css';

export const Dynamic = () => {
    const [fields, setFields] = useState([]);
  const [newField, setNewField] = useState({
    displayName: '',
    dataType: 'text',
    maxLength: '',
    mandatory: 'yes',
    fieldData: '',
  });

  const handleInputChange = (field, value) => {
    setNewField({ ...newField, [field]: value });
  };

  const handleAddField = () => {
    if (fields.length < 4) {
      setFields([...fields, newField]);
      setNewField({
        displayName: '',
        dataType: 'text',
        maxLength: '',
        mandatory: 'yes',
        fieldData: '',
      });
    } else {
      alert('Maximum of 4 fields allowed.');
    }
  };

  return (
    <div className='container'>
      <div className='profile-select'>
        <p className='prof-select-text'><h4>Dynamic Data Collection</h4></p>
            <Dropdown>
                
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" className='select-box'>
                
                    <p className='drop-text'><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>Select</p>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>Student</Dropdown.Item>
                    <Dropdown.Item href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>Salaried</Dropdown.Item>
                    <Dropdown.Item href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>Business</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
      </div>
      <div className='add-field'>
        
        <div className='add-field-btn'>
            <button type="button" class="btn" id='field-btn'>Add Field</button>
        </div>
        <div className='field-container'>
            <Dropdown className='field-drop'>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Select Field Type
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">TextBox</Dropdown.Item>
                    <Dropdown.Item href="#">Dropdown</Dropdown.Item>
                    <Dropdown.Item href="#">Date Picker</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
      </div>
      <div className='Field-Details'>
        <div className='field-display-name'>
          Field Display Name
          <input
            type='textbox'
            value={newField.displayName}
            onChange={(e) => handleInputChange('displayName', e.target.value)}
          />
        </div>
        <div className='field-data-type'>
          Field Data Type
          <select
            value={newField.dataType}
            onChange={(e) => handleInputChange('dataType', e.target.value)}
          >
            <option value="text">Text</option>
            <option value="numeric">Numeric</option>
            <option value="both">AlphaNumeric</option>
          </select>
        </div>
        <div className='field-max-len'>
          Field Max Length Allowed
          <input
            type='textbox'
            placeholder='eg. 10'
            value={newField.maxLength}
            onChange={(e) => handleInputChange('maxLength', e.target.value)}
          />
        </div>
        <div className='mandatory'>
          Mandatory
          <select
            value={newField.mandatory}
            onChange={(e) => handleInputChange('mandatory', e.target.value)}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className='field-data'>
          Field Data
          <input
            type='textbox'
            value={newField.fieldData}
            onChange={(e) => handleInputChange('fieldData', e.target.value)}
          />
        </div>
        <button type="button" onClick={handleAddField} className='btn btn-primary table-add-field'>
          Add Field
        </button>
      </div>

      
      <div className='fields-table'>
        <h3 className='table-header'>Added Fields</h3>
        <table className='field-table'>
          <thead>
            <tr>
              <th>Display Name</th>
              <th>Data Type</th>
              <th>Max Length</th>
              <th>Mandatory</th>
              <th>Field Data</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, index) => (
              <tr key={index}>
                <td>{field.displayName}</td>
                <td>{field.dataType}</td>
                <td>{field.maxLength}</td>
                <td>{field.mandatory}</td>
                <td>{field.fieldData}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
