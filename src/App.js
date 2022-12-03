//import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { Increase, Decrease, Reset } from './redux/Actions/action';

const App = () => {
  const count = useSelector((state) => state.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>HELLO</h1>
      <button onClick={() => dispatch(Increase())}>Increase</button>
        <span>{count}</span>
      <button onClick={() => dispatch(Decrease())}>Decrease</button>
      <br/>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </div>
  );
}

export default App;
