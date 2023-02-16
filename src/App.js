import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Counter(props) {
  return <div class="count">{props.value}</div>
}

function Button(props) {
  return <span>
    <input type="button" class="btn" value={props.label} onClick={(e)=>{
      props.onClick();
    }}></input>
  </span>
}

function App() {
  const [count, setCount] = new useState(0);

  return (<>
    <Counter value={count}></Counter>
    <div class="btn-box">
      <Button label={"+1"} onClick={(e)=>{
        setCount(count + 1);
      }}></Button>
      <Button label={"-1"} onClick={(e)=>{
        setCount(count - 1);
      }}></Button>
    </div>
    </>);
}

export default App;
