import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import ShowGraph from './components/ShowGraph/ShowGraph';
import { useEffect, useState } from 'react';

function App() {
  const [isUserHaveAccount, setIsUserHaveAccount] = useState(false);

  useEffect(() => {
    setIsUserHaveAccount((sessionStorage.getItem('userInfo')) === null ? false : true);
  }, [])

  
  return (
    <div className="App">
      {isUserHaveAccount ? <ShowGraph /> : <Home setIsUserHaveAccount={setIsUserHaveAccount} />}
    </div>
  );
}

export default App;
