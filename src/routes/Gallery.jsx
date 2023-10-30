import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import '../App.css'
import { supabase } from '../client'
const Gallery = (props) => {

  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate()
  const [crewmates, setCrewmates] = useState([]);


  useEffect(() => {
    const parse = async () => {

      let { data, error } = await supabase
        .from('Crewmates')
        .select('*')

      if (error) {
        console.error('Error fetching data:', error)
      } else {
        console.log('Fetched data:', data)
        setCrewmates(data)
      }
    };
    parse();
  }, []); // Only does this on the initial render

  useEffect(() => {
    setFilteredData(crewmates);

  }, [crewmates]);

  return (
    <div className='content'>
      <h1 className='header'>The Crew!</h1>
      <div className="mainContent">
        {filteredData.map((dataPoint) => (
          <div className="displayCrew" key={dataPoint.id
          }
            onClick={() =>
              navigate(
                `/crewmate?id=${dataPoint.id}`
              )
            }
          >
            <h1>Crewmate {dataPoint.name}</h1>
            <p>Color: {dataPoint.color}</p>
            <p>Job: {dataPoint.job}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;