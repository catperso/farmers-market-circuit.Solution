import React from 'react';
import Schedule from './Schedule';
import Header from './Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div class="row">
        <div class="col-6">
          <Schedule />
        </div>
        <div class="col-6">

        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
