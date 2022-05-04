import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Travel from './components/Travel';
import Lifestyle from './components/Lifestyle';
import Experience from './components/Experience';
import NewItemForm from './components/NewItemForm';
import { dataURL } from './Global';

const App = () => {  
  const [list, setList] = React.useState([]);
  // const [displayList, setDisplayList] = React.useState([]);
  const [allCategories, setAllCategories] = React.useState([]);

  React.useEffect(() => {
    document.title = "Bucket List | Home";
    
    fetch(dataURL)
    .then(res => res.json())
    .then(data => setList(data))
    .catch(err => console.log(err))

    fetch(dataURL+`/categories`)
    .then(res => res.json())
    .then(data => setAllCategories(data))
    .catch(err => console.log(err))
  }, []);

  let displayList = list;
  

  return (
    <div className="App">
      <Router>
        <Header categories={allCategories}/>
        <NewItemForm />
        <Routes>
          <Route path="/" element={<Homepage list={displayList} />} />
          <Route path="/travel" element={<Travel list={displayList} />} />
          <Route path="/lifestyle" element={<Lifestyle list={displayList} />} />
          <Route path="/experience" element={<Experience list={displayList} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
