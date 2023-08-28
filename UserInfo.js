import React, { useState } from 'react';


function UserInfo() {
  const [dataList, setDataList] = useState([]);
  const [inputDeviceId, setInputDeviceId] = useState('');

  const clickInfo = () => {
    const inputDeviceId = document.getElementById("device-id-input").value;

    fetch(`https://i6qwc86171.execute-api.eu-west-1.amazonaws.com/Prod/get/${inputDeviceId}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            const newDataList = data.map(item => ({
                device_id: item.device_id,
                sk: item.sk,
                pk: item.pk,
                reading: item.reading,
                timestamp: item.timestamp
            }));
            setDataList(newDataList);
            alertbox(); // Call the alertbox function after retrieving details
        })
        .catch(error => {
            console.error("Error:", error);
        });
  };

  let alertbox = () => {
    alert('You have successfully retrieved your details!');
  };

  return (
    <div className="container">
      <h1>Users info</h1>
      <i>Enter Device ID</i>
      <input
        type="text"
        id="device-id-input"
        placeholder="Device ID"
        value={inputDeviceId}
        onChange={e => setInputDeviceId(e.target.value)}
      />
      <br />
      <br />
      <p>Click the button to retrieve your information</p>
      <br />
      <button onClick={clickInfo} type="button" id="btn">Enter</button>
      <ul id="data-list">
        {dataList.map((item, index) => (
          <li key={index}>
            Device ID: {item.device_id}<br />
            SK: {item.sk}<br />
            PK: {item.pk}<br />
            Reading: {item.reading}<br />
            Timestamp: {item.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserInfo;
