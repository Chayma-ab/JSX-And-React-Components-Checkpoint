
import './App.css';
import Adress from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div className='app'>
      <div className="text">
      <FullName/>
      <Adress/>
      </div>
      
     <ProfilePhoto/>

    </div>
  );
}

export default App;
