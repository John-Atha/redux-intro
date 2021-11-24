import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  square,
  multiplyByAmount,
  selectCount,
  reset,
  divideByAmount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [mulAmount, setMulAmount] = useState('2');

  const updateAmount = (setter, val) => {
    if (isNaN(val)) {
      dispatch(reset());
    }
    else {
      setter(Number(val));
    }
  }


  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => updateAmount(setIncrementAmount, e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementAmount))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementAmount))}
        >
          Add If Odd
        </button>
        </div>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label = "Set mul/div amount"
            value={mulAmount}
            onChange = {(e) => updateAmount(setMulAmount, e.target.value)}
          />
          <button
            className={styles.button}
            onClick = {() => dispatch(multiplyByAmount(mulAmount))}>
              Multiply By Amount
          </button>
          <button
            className={styles.button}
            onClick = {() => dispatch(divideByAmount(mulAmount))}>
              Divide By Amount
          </button>
      </div>
      <div className={styles.row}>
        <button
            className={styles.button}
            onClick = {() => dispatch(square())}>
              Square
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(reset())}>
            Reset
        </button>
      </div>
    </div>
  );
}
