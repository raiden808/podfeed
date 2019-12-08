import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';
import './index.css'

function App() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="columns">
          <div className="column">
            First column
          </div>
          <div className="column">
            Second column
          </div>
          <div className="column">
            Third column
          </div>
          <div className="column">
            Fourth column
          </div>
        </div>
      </footer> 
    </>
  );
}

export default App;
