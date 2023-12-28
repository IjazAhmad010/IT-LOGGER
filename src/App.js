import React, { Fragment, useEffect } from 'react';
import SearchBar from './componenets/layout/SearchBar';
import Logs from './componenets/logs/Logs';
import AddBtn from './componenets/layout/AddBtn';
import AddLogModal from './componenets/logs/AddLogModal';
import EditLogModal from './componenets/logs/EditLogModal';
import AddTechsModal from './componenets/techs/AddTechsModal';
import TechListModal from './componenets/techs/TechListModal';

import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    //init materlize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechsModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};
export default App;
