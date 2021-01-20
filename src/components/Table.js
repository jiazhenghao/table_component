import React, { useState } from "react";
import { fetchData, fetchDetails } from "../api/fetchData";

const Table = (props) => {
  const { data, handleData } = props;
  const [details, setDetails] = useState(null);

  const handleClick = (url) => {
    if (url) {
      fetchData(url).then((newData) => handleData(newData));
    }
  };

  const handleRowClick = (row) => {
    if (row.films.length !== 0) {
      let films = [];
      fetchDetails(row.films).then((newDetails) => {
        newDetails.map((film) => {
          return film.then((x) => {
            films.push(x.title);
            setDetails({
              name: row.name,
              birth_year: row.birth_year,
              gender: row.gender,
              films,
            });
          });
        });
      });
    } else {
      // if key=films is empty, no need to call api
      setDetails({
        name: row.name,
        birth_year: row.birth_year,
        gender: row.gender,
        films: "no films",
      });
    }
  };

  return (
    <div className="tableList">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
          </tr>
        </thead>
        <tbody>
          {data.results &&
            data.results.map((row) => {
              return (
                <tr key={row.name} onClick={() => handleRowClick(row)}>
                  <td>{row.name}</td>
                  <td>{row.height}</td>
                  <td>{row.mass}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="tableList_buttons_div">
        <button
          disabled={!data.previous}
          onClick={() => handleClick(data.previous)}
        >
          Back
        </button>
        <button disabled={!data.next} onClick={() => handleClick(data.next)}>
          Next
        </button>
      </div>
      {details && (
        <div className="tableList_detail_div">
          <p className="bold">Detail Section</p>
          <p>Name: {details.name}</p>
          <p>Birth year: {details.birth_year}</p>
          <p>Gender: {details.gender}</p>
          <p>List of films: </p>
          <ul>
            {details.films.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Table;
