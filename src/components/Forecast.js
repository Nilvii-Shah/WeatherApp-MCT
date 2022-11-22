import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import clear from "../images/sunny.png";
import haza from "../images/haza.png";
import rain from "../images/storm.png";
import smoke from "../images/smoke.png";
import clouds from "../images/clouds.png";
import mist from "../images/mist.png";
import { setQuery } from "../slice";
import { useContext } from "react";
import { Data } from "./Main";

const Forecast = () => {
  const details = useContext(Data);

  const dispatch = useDispatch();
  const query = useSelector((state) => state.isTheme.query);
  const isTrue = useSelector((state) => state.isTheme.isTrue);
  const [message, setmessage] = useState(query);

  return (
    <>
      <div className="container">
        <div className="search">
          <input
            className={isTrue ? "input_light" : "input_dark"}
            type="text"
            placeholder="Enter city.."
            value={message}
            onChange={(e) => setmessage(e.target.value)}
          />
          <button
            className={isTrue ? "input_light" : "input_dark"}
            onClick={() => dispatch(setQuery(message))}
          >
            Search
          </button>
        </div>

        <div className="details">
          <h1>{details.city.name}</h1>
          <p>{details.list[0].weather[0].description}</p>
          {details.list[0].weather[0].main === "Clear" ? (
            <img src={clear} alt="" />
          ) : details.list[0].weather[0].main === "Haza" ? (
            <img src={haza} alt="" />
          ) : details.list[0].weather[0].main === "Rain" ? (
            <img src={rain} alt="" />
          ) : details.list[0].weather[0].main === "Smoke" ? (
            <img src={smoke} alt="" />
          ) : details.list[0].weather[0].main === "Clouds" ? (
            <img src={clouds} alt="" />
          ) : details.list[0].weather[0].main === "Mist" ? (
            <img src={mist} alt="" />
          ) : (
            <img src={clear} alt="" />
          )}

          <h1>{details.list[0].main.temp}&deg;Cel</h1>
        </div>
        <hr />
        <div className="temp">
          <div>
            <p>{details.list[0].main.temp_min}&deg;Cel</p>
            <h2>Min Temp</h2>
          </div>

          <div>
            <p>{details.list[0].main.temp_max}&deg;Cel</p>
            <h2>Max Temp</h2>
          </div>
          <div>
            <p>{details.list[0].main.humidity}%</p>
            <h2>Humidity</h2>
          </div>
        </div>

        <div className="forcasts">
          <div className="card">
            <span>{details.list[0].dt_txt.substring(0, 10)}</span>
            {details.list[0].weather[0].main === "Clear" ? (
              <img src={clear} alt="" />
            ) : details.list[0].weather[0].main === "Haza" ? (
              <img src={haza} alt="" />
            ) : details.list[0].weather[0].main === "Rain" ? (
              <img src={rain} alt="" />
            ) : details.list[0].weather[0].main === "Smoke" ? (
              <img src={smoke} alt="" />
            ) : details.list[0].weather[0].main === "Clouds" ? (
              <img src={clouds} alt="" />
            ) : details.list[0].weather[0].main === "Mist" ? (
              <img src={mist} alt="" />
            ) : (
              <img src={clear} alt="" />
            )}
            <span style={{ color: "green" }}>
              {details.list[0].weather[0].description}
            </span>
          </div>

          <hr />
          <div className="card">
            <span>{details.list[8].dt_txt.substring(0, 11)}</span>

            {details.list[8].weather[0].main === "Clear" ? (
              <img src={clear} alt="" />
            ) : details.list[8].weather[0].main === "Haza" ? (
              <img src={haza} alt="" />
            ) : details.list[8].weather[0].main === "Rain" ? (
              <img src={rain} alt="" />
            ) : details.list[8].weather[0].main === "Smoke" ? (
              <img src={smoke} alt="" />
            ) : details.list[8].weather[0].main === "Clouds" ? (
              <img src={clouds} alt="" />
            ) : details.list[8].weather[0].main === "Mist" ? (
              <img src={mist} alt="" />
            ) : (
              <img src={clear} alt="" />
            )}
            <span style={{ color: "green" }}>
              {details.list[8].weather[0].description}
            </span>
          </div>
          <hr />
          <div className="card">
            <span>{details.list[16].dt_txt.substring(0, 11)}</span>

            {details.list[16].weather[0].main === "Clear" ? (
              <img src={clear} alt="" />
            ) : details.list[16].weather[0].main === "Haza" ? (
              <img src={haza} alt="" />
            ) : details.list[16].weather[0].main === "Rain" ? (
              <img src={rain} alt="" />
            ) : details.list[16].weather[0].main === "Smoke" ? (
              <img src={smoke} alt="" />
            ) : details.list[16].weather[0].main === "Clouds" ? (
              <img src={clouds} alt="" />
            ) : details.list[16].weather[0].main === "Mist" ? (
              <img src={mist} alt="" />
            ) : (
              <img src={clear} alt="" />
            )}
            <span style={{ color: "green" }}>
              {details.list[26].weather[0].description}
            </span>
          </div>
          <hr />
          <div className="card">
            <span>{details.list[24].dt_txt.substring(0, 11)}</span>

            {details.list[24].weather[0].main === "Clear" ? (
              <img src={clear} alt="" />
            ) : details.list[24].weather[0].main === "Haza" ? (
              <img src={haza} alt="" />
            ) : details.list[24].weather[0].main === "Rain" ? (
              <img src={rain} alt="" />
            ) : details.list[24].weather[0].main === "Smoke" ? (
              <img src={smoke} alt="" />
            ) : details.list[24].weather[0].main === "Clouds" ? (
              <img src={clouds} alt="" />
            ) : details.list[24].weather[0].main === "Mist" ? (
              <img src={mist} alt="" />
            ) : (
              <img src={clear} alt="" />
            )}
            <span style={{ color: "green" }}>
              {details.list[24].weather[0].description}
            </span>
          </div>
          <hr />
          <div className="card">
            <span>{details.list[33].dt_txt.substring(0, 11)}</span>

            {details.list[33].weather[0].main === "Clear" ? (
              <img src={clear} alt="" />
            ) : details.list[33].weather[0].main === "Haza" ? (
              <img src={haza} alt="" />
            ) : details.list[33].weather[0].main === "Rain" ? (
              <img src={rain} alt="" />
            ) : details.list[33].weather[0].main === "Smoke" ? (
              <img src={smoke} alt="" />
            ) : details.list[33].weather[0].main === "Clouds" ? (
              <img src={clouds} alt="" />
            ) : details.list[33].weather[0].main === "Mist" ? (
              <img src={mist} alt="" />
            ) : (
              <img src={clear} alt="" />
            )}
            <span style={{ color: "green" }}>
              {details.list[33].weather[0].description}
            </span>
          </div>
        </div><br />

      </div>
    </>
  );
};

export default Forecast;
