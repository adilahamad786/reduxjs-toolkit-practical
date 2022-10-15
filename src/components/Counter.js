import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({type : "increment"})
  }

  const incrementby5 = () => {
    dispatch({type : "increase", amount : 5})
  }

  const decrement = () => {
    dispatch({type : "decrement"})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={incrementby5}>Decrement By 5</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;