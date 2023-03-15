import { DataContext } from 'Components/Context/DataContext';
import { data } from 'data/data';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { RouterBlock } from './Pages/RouterBlock';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <DataContext.Provider value={data}>
        <RouterBlock />
      </DataContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
