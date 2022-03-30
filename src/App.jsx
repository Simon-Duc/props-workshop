import './App.css';
import AvatarList from './components/AvatarList';

const bart = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson"
  };

const homer = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
  firstName: "Homer",
  lastName: "Simpson"
  };

const marge = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
  firstName: "Marge",
  lastName: "Simpson"
  };

const simpsons = [bart, homer, marge];


function App() {
  return (
    <div className='flex'>
      <AvatarList dataArray={simpsons}/>
    </div>
  );
}

export default App;
