import { use, useState } from "react";
import County from "../Country/County";
import './Countries.css'

const Countries = ({ countriesPromise }) => {

    const countries = use(countriesPromise);
    // console.log(countries);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedFlags = (country, visited) => {
        // setVisitedFlags([...visitedFlags, country]);
        // console.log(visitedFlags);
        const countryId = country.ccn3.ccn3;

        setVisitedFlags(previousFlags => {
            if(visited) {
                const alreadyVisitedFlags = previousFlags.some(previousFlag => previousFlag.ccn3.ccn3 === countryId)
                if(alreadyVisitedFlags){
                    return previousFlags;
                }
                return [...previousFlags, country];
            }
            return previousFlags.filter(previousFlag => previousFlag.ccn3.ccn3 !== countryId);
        })
    }

    const handleVisitedCountries = (country, visited) => {
        // console.log('handle visited country clicked', country);
        // const visitedCountriesArray = [visitedCountries];
        const countryId = country.ccn3.ccn3;

        setVisitedCountries(previousCountries => {
            if(visited){
                const alreadyVisited = previousCountries.some(previousCountry => previousCountry.ccn3.ccn3 === countryId)

                if(alreadyVisited){
                    return previousCountries;
                }
                return [...previousCountries, country]
            }
            return previousCountries.filter(previousCountry => previousCountry.ccn3.ccn3 !== countryId);
        })

    }

    return (
        <>
            <div style={{ margin: '20px', fontWeight: 'bold' }}>
                <h1>Total Countries : {countries.length}</h1>
                <h3>Total Countries Visited : {visitedCountries.length}</h3>
                <ol style={{ textAlign: 'left', display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                    {
                        visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                    }
                </ol>
                <ul style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                    {
                        visitedFlags.map((country, index) => <li key={index}>
                            <img style={{ width: '40px', height: '30px' }} src={country.flags.flags.png} alt="" />
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