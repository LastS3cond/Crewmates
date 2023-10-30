import React from 'react';
import { supabase } from '../client'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
const Creator = () => {
    // Retrieve the timestamp from the query parameter
    const [searchInput, setSearchInput] = useState("");
    const [color, setColor] = useState("White");
    const [job, setJob] = useState("Unemployed");
    const navigate = useNavigate()

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleTypeChange = (event) => {
        setColor(event.target.value);
    };

    const handleJobChange = (event) => {
        setJob(event.target.value);
    };

    const submitForm = async (event) => {
        console.log(searchInput);
        console.log(color);
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .insert({ name: searchInput, color: color, job: job })
            .select();

        navigate(
            `/gallery`
        )
    };

    return (
        <div id="C">
            <div className="smiley-face" style={{ backgroundColor: color }}>
                <div className="eyes left"></div>
                <div className="eyes right"></div>
                <div className="mouth"></div>
            </div>
            <div className='Creator'>
                <input
                    type="text"
                    placeholder="Enter the Crewmate's Name"
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
                <button onClick={submitForm} type="button">Create Crewmate</button>
            </div>
        </div>
    );
};

export default Creator;
