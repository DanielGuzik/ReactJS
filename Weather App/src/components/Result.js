import React from 'react'
import './Result.css'

const Result = props => {

    const { err, city, date, sunrise, sunset, temp, pressure, wind, } = props.weather;

    let content = null;

    if (!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content = (
            <>
                <h3>Result for the city: <em>{city}</em></h3>
                <h4>Current time: {date}</h4>
                <h4>Current temperature: {Math.round(temp)}&#176;C</h4>
                <h4>In this city sunrise about {sunriseTime} and sunset about {sunsetTime}</h4>
                <h4>Pressure: {pressure}hPa</h4>
                <h4>Wind speed: {wind}m/s</h4>
            </>
        )
    }

    return (
        <div className="result">
            {err ? `Not found city: ${city}` : content}
        </div>
    );
}

export default Result