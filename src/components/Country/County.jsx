import { useState } from 'react';
import './Country.css'

const County = ({country, handleVisitedCountries, handleVisitedFlags}) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
        console.log(visited)
        handleVisitedCountries(country);
    }

    // console.log(country);

    return (
        <div className='card'>
            <div className='card-head'>
                <div className='image-container'><img className="perfect-img" src={country.flags.flags.png} alt="" /></div>
                <button className='button'><h4>{country.name.common}</h4></button>
                <h5>{country.name.official}</h5>
                <button className='button'>{country.ccn3?.ccn3}</button>
            </div>
            <div style={{background : '#020613', margin:'5px', display: 'flex', flexDirection : 'column', gap : '5px'}}>
                <p>Currencies : BDT symbol</p>
                <p>Capital : Dhaka</p>
                <p>Region : Asia</p>
                <p>Language: Bangali</p>
                <p>Area : {country.area.area} {country.area.area>400000 ? 'Big Country' : 'Small country'}</p>
                <button 
                className={visited? 'visited' : 'notVisited'} 
                onClick={handleVisited}>
                    {visited? 'Visited' : 'Not Visited'}
                </button>
                <button onClick={() => {handleVisitedFlags(country)}}>
                    Add Visited Flag
                </button>
            </div>
        </div>
    );
};

export default County;