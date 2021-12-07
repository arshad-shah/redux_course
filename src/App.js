import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrement, increment } from './actions';
function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch(increment);
  return (
    <div className="App">
      <h1>
        {counter}
      </h1>
      {/* increment button */}
      <button onClick={() => dispatch(increment(2))}>
      +
      </button>

      {/* decrement button */}
      <button onClick={() => dispatch(decrement(5))}>
      -
      </button>
    </div>
  );
}

export default App;
