import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';
import './index.css'

function App() {
  return (
    <>
      <section className="section">
        <div className="columns">
          <div className="column is-one-fifth">
              <aside className="menu">
                <p className="menu-label">
                  General
                </p>
                <ul className="menu-list">
                  <li><a>Dashboard</a></li>
                  <li><a>Customers</a></li>
                </ul>
            </aside>
          </div>
          <div className="column">Auto</div>
        </div>
      </section>
    </>
  );
}

export default App;
