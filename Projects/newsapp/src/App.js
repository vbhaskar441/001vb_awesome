//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

//import { Route, Router } from 'react-router-dom';
import { 
  BrowserRouter, 
  Routes, // instead of "Switch" Using Routes instead of Switch in react-router v6
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


const App=()=>{
  const pageSize=14;
  const country='us';
  const menu_urls = ['buisness', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  const apiKey = process.env.REACT_APP_NEWS_API; 
  const [progress,setProgress] = useState({progress:0});  
  //const setProgress=(progress)=>{
    //setUprogress({progress:progress})
  //}
    return (
      <div>        
        <BrowserRouter>
        <NavBar menu_urls={menu_urls} />
        <LoadingBar height={7} color='#ffff00' progress={progress}
       // onLoaderFinished={() => setProgress(0)  }
       />
        <Routes>
          {menu_urls.map((category)=>{
            return<Route key={category+"_rt"} exact path={"/"+category} element={<News key={category+"_nw"} apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={country} category={category} />} />
          })}        
        </Routes>               
        </BrowserRouter>
      </div>
    )
  
}
export default App;