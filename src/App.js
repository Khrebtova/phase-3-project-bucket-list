import * as React from 'react';

import Header from './components/Header';
import Homepage from './components/Homepage';
import NewItemForm from './components/NewItemForm';
import { dataURL } from './Global';

const App = () => {  
  const [list, setList] = React.useState([]);
  const [displayList, setDisplayList] = React.useState([]);
  const [allCategories, setAllCategories] = React.useState([]);
  
  React.useEffect(() => {
    document.title = "Bucket List | Home";
    
    fetch(dataURL)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

    fetch(dataURL+`/categories`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <Header />
      <NewItemForm />
      <Homepage />
    </div>
  );
}

export default App;
