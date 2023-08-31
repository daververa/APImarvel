import './App.css';

import { useEffect, useState } from 'react';

const apikey = '2dfcb68dbad59bb7f735626d04fdb462';
const ts = '31/08/2023, 01:42:55';
const hash = 'fda6010ec056366f064010b0be49cada';
export const url = 'https://gateway.marvel.com:443/v1/public/characters?apikey=2dfcb68dbad59bb7f735626d04fdb462&ts=31/08/2023, 01:42:55&hash=fda6010ec056366f064010b0be49cada';

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setPersonajes(data.data.results))
      .catch(err => console.log('error', err));
  }, []);

  return (
    <div className="App">

      <div className='header'>
        <h1>MARVEL</h1>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">

        {personajes.map(per => (

          <div className="col" key={per.id}>
            <div className="card" style={{ width: '18em', height: '18rem' }}>
              <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top" style={{ width: '80%', height: '300px' }} />
              <div className="card-body">
                <p className="card-text">{per.name}</p>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}

export default App;
