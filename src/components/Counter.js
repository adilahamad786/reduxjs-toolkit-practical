import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { counterActions } from '../store';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const incrementby5 = () => {
    dispatch(counterActions.increase(5))
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter && <div className={classes.value}>{counter}</div> }
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