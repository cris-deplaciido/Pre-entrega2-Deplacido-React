import './style.css';
import NavBar from './componentes/NavBar/NavBar';
import ContainerCardItems from './componentes/ContainerCardItems/ContainerCardItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsItem from './componentes/DetailsItem/DetailsItem';

function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={ <ContainerCardItems />} />
            <Route path='/item/:idItem' element={ <DetailsItem />} />
            <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App; 