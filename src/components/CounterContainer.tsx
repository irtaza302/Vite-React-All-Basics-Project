import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { increment, decrement } from '../store/counterSlice';
import Counter from '../components/Counter';

const CounterContainer: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  return (
    <Counter
      count={count}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  );
};

export default CounterContainer;

