import React, { useState } from 'react';

function AddDeviceForm() {
  const [formData, setFormData] = useState({
    // Initialize form data fields here
    // For example: device_id: '', capacity: '', etc.
  });

  const handleSubmit = event => {
    event.preventDefault();

    const formattedData = { ...formData };
    formattedData.capacity = parseFloat(formattedData.capacity);

    console.log("The data is ", formattedData);

    fetch("https://i6qwc86171.execute-api.eu-west-1.amazonaws.com/Prod/addDevice", {
      method: "POST",
      body: JSON.stringify(formattedData), // Send the form data as JSON
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json()) // Parse response as JSON
      .then(result => {
        console.log("Result:", result);
      })
      .catch(error => {
        console.error("Error:", error);
      });
      alertbox2();
  };

  let alertbox2 = () => {
    alert('You have successfully entered your details!');
  };
  return (
    <div>
      <form onSubmit={handleSubmit} id="form">
        {/* Render your form fields here */}
        {/* For example: */}
        <i>Enter Device ID</i>
        <br>
        </br>
        <input
          type="text"
          name="device_id"
          id='dev_input'
          value={formData.device_id}
          onChange={e => setFormData({ ...formData, device_id: e.target.value })}
        />
        <br>
        </br>
        <i>Enter Capacity</i>
        <br>
        </br>
        <input
          type="text"
          name="capacity"
          id='cap_input'
          value={formData.capacity}
          onChange={e => setFormData({ ...formData, capacity: e.target.value })}
        />
        <br>
        </br>
        <button id='btn' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddDeviceForm;
