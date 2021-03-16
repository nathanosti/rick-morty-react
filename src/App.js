import Cards from './components/Card/Cards';

import './global.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'

function App() {
  return (
    <>
      <div className="cardsContainer">
        <Cards />
      </div>
    </>
  );
}

export default App;
