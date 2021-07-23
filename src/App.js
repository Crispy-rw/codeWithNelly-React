import React, { useState, useEffect } from 'react';
import Card from './components/Card.js';

import './style.css';

export default function App() {
  const getData = () => {
    if (searchId == '' || !/^\d{1,5}$/.test(searchId)) return;
    setLoading(true);
    return fetch(
      `https://jsonplaceholder.typicode.com/albums/${searchId}/photos`
    )
      .then(response => response.json())
      .then(json => {
        setAlbums(json);
        setLoading(false);
      });
  };

  const [searchId, setSearchId] = useState('');
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = evt => {
    setSearchId(evt.target.value);
  };
  return (
    <div>
      <header className="header">
        <p className="logo">Code With Nelly</p>
        <div className="input-group">
          <input
            type="text"
            className="input"
            placeholder="Search"
            value={searchId}
            onChange={handleChange}
          />
          <button onClick={getData} className="btn">
            Search
          </button>
        </div>
      </header>
      {loading && <p className="no_result">Loading please wait!</p>}
      {!loading && albums.length != 0 && (
        <div className="data">
          {' '}
          {albums.map((el, i) => {
            return <Card key={i} {...el} />;
          })}{' '}
        </div>
      )}
    </div>
  );
}
