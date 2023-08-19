import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import MainMenuPage from './Page/MainPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' component={<MainMenuPage/>}/>
    </Routes>
    </BrowserRouter>    
    </>
      );
}

export default App;
