//components
import React from 'react';
import { Box } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from './components/home/Home';
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Box style={{marginTop: 64 }}>
        <Routes>
          <Route path= '/' element= {<Home/>}/>
          <Route path='/details' element= {<DetailView/>}/>
          <Route path= '/create' element= {<CreateView/>}/>
          <Route path= '/update' element= {<UpdateView/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
