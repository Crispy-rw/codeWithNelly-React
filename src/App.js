import React, { useState, useEffect } from 'react';
import Card from './components/Card.js';

import './style.css';

export default function App() {
  const getData = () => {
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
  console.log('albums', albums);
  return (
    <div>
      <header className="header">
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
      <div className="data">
        {loading && 'Loading Please wait'}
        {!loading && albums.length != 0 ? (
          albums.map((el, i) => {
            return <Card key={i} src={el.thumbnailUrl} />;
          })
        ) : (
          <p className="no_result">No Results found!</p>
        )}
      </div>
    </div>
  );
}
