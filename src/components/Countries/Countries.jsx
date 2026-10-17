import { use, useState } from "react";
import County from "../Country/County";
import './Countries.css'

const Countries = ({ countriesPromise }) => {

    const countries = use(countriesPromise);
    // console.log(countries);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedFlags = (country) => {
        setVisitedFlags([...visitedFlags, country]);
        console.log(visitedFlags);
    }

    const handleVisitedCountries = (country) => {
        // console.log('handle visited country clicked', country);
        // const visitedCountriesArray = [visitedCountries];
        setVisitedCountries([...visitedCountries, country])
        console.log(visitedCountries);
    }

    return (
        <>
            <div style={{ margin: '20px', fontWeight: 'bold' }}>
                <h1>Countries : {countries.length}</h1>
                <h3>Total Countries Visited : {visitedCountries.length}</h3>
                <ol style={{ textAlign: 'left', display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                    {
                        visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                    }
                </ol>
                <ul style={{display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    {
                        visitedFlags.map((country, index) => <li key={index}>
                            <img style={{width : '40px', height : '30px'}} src={country.flags.flags.png} alt="" />
                        </li>)
                    }
                </ul>
            </div>

            <div className="container">
                {
                    countries.map(country => <County
                        handleVisitedCountries={handleVisitedCountries}
                        key={country.ccn3.ccn3}
                        handleVisitedFlags={handleVisitedFlags}
                        country={country}>
                    </County>)
                }
            </div>
        </>
    );
};

export default Countries;