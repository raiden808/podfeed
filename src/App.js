import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';

function App() {
  return (
      <div className="container">
        <div className="field">
          <label className="label">Search a Podcast!</label>
          <div className="control">
            <input className="input" type="text" placeholder="Insert RSS" />
          </div>
        </div>
      </div>
  );
}

export default App;
