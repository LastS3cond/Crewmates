// WeatherDetail.jsx
import React from 'react';
import { supabase } from '../client'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Crewmate = () => {
  // Retrieve the timestamp from the query parameter
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id');
  const [searchInput, setSearchInput] = useState("");
  const [color, setColor] = useState("Red");
  const [job, setJob] = useState("Unemployed");
  const navigate = useNavigate()

  const [crewmates, setCrewmates] = useState([]);


  useEffect(() => {
    const parse = async () => {

      let { data, error } = await supabase
        .from('Crewmates')
        .select('*')
        .eq('id', id)

      if (error) {
        console.error('Error fetching data:', error)
      } else {
        console.log('Fetched data:', data)
        setCrewmates(data[0])
        setSearchInput(data[0].name)
        setColor(data[0].color)
        setJob(data[0].job)
      }
    };
    parse();
  }, []); // Only does this on the initial render

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleTypeChange = (event) => {
    setColor(event.target.value);
  };

  const handleJobChange = (event) => {
    setJob(event.target.value);
  };

  const updateForm = async (event) => {
    console.log(searchInput);
    console.log(color);
    event.preventDefault();

    await supabase
      .from('Crewmates')
      .update({ name: searchInput, color: color, job: job })
      .eq('id', id)
      .select()

    navigate(
      `/gallery`
    )
  };

  const deleteForm = async (event) => {
    console.log(searchInput);
    console.log(color);
    event.preventDefault();

    await supabase
      .from('Crewmates')
      .delete()
      .eq('id', id)

    navigate(
      `/gallery`
    )
  };

  return (
    <div>
      <div className="CrewmateInfo" key={crewmates.id}>
        <h1>Crewmate Information</h1>
        <div className="smiley-face" style={{ backgroundColor: crewmates.color }}>
          <div className="eyes left"></div>
          <div className="eyes right"></div>
          <div className="mouth"></div>
        </div>
        <p>Name: {crewmates.name}</p>
        <p>Color: {crewmates.color}</p>
        <p>Job: {crewmates.job}</p>
      </div>
      <div className='Creator'>
        <input
          type="text"
          placeholder="Update Crewmate's Name"
          value={searchInput}
          onChange={handleSearchInputChange}
          className="search-input"
        />
        <select value={color} onChange={handleTypeChange}>
          <option value="White">White</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Purple">Purple</option>
          <option value="Pink">Pink</option>
          <option value="Orange">Orange</option>
          <option value="Brown">Brown</option>
        </select>
        <select value={job} onChange={handleJobChange}>
          <option value="Unemployed">Unemployed</option>
          <option value="Pilot">Pilot</option>
          <option value="Cleaner">Cleaner</option>
          <option value="Mechanic">Mechanic</option>
          <option value="Technician">Technician</option>
          <option value="Doctor">Doctor</option>
          <option value="Engineer">Engineer</option>
          <option value="Scientist">Scientist</option>
          <option value="Captain">Captain</option>
        </select>
        <button onClick={updateForm} type="button">Update Crewmate</button>
        <button onClick={deleteForm} type="button">Delete Crewmate</button>
      </div>
    </div>
  );
};

export default Crewmate;
