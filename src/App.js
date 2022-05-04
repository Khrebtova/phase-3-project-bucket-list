Import * as React from 'react';
import Header from './components/Header';
import Homepage from './components/Homepage';
import NewItemForm from './components/NewItemForm';

const App = () => {  

  return (
    <div className="App">
      <Header />
      <NewItemForm />
      <Homepage />
    </div>
  );
}

export default App;
