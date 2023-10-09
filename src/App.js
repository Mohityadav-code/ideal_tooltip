import logo from './logo.svg';
import './App.css';
import Tooltip from './components/Tooltip';

function App() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
    <Tooltip position="top" content="Hello !">
     this is top tooltip
     </Tooltip>
     <Tooltip position="bottom" content="Hello  !">
     this is bottom tooltip
     </Tooltip>
     <Tooltip position="left" content="Hello !">
     this is left tooltip
     </Tooltip>
     <Tooltip position="right" content="Hello !">
     this is right tooltip
     </Tooltip>
   </div>
  );
}

export default App;
