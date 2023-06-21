import {useState} from 'react'
function getRandomArr(len, num) {
  let arr = [];

  function fn() {
    let n = Math.floor(Math.random() * len);
    return arr.includes(n) ? fn() : n;
  }

  for (let i = 0; i < num; i++) {
    arr.push(fn());
  }

  return arr;
}

const App = () => {
  // 随机几次 
  const randomCount = 26;
  // 随机几个下标
  const randomNum = 3;

  const [state, setState] = useState([
    { name: "1.png" },
    { name: "2.png" },
    { name: "3.png" },
    { name: "4.png" },
    { name: "5.png" },
    { name: "6.png" },
    { name: "7.png" },
    { name: "8.png" },
    { name: "9.png" },
    { name: "10.png" },
    { name: "11.png" },
    { name: "12.png" },
    { name: "13.png" },
    { name: "14.png" },
    { name: "15.png" },
    { name: "16.png" },
    { name: "17.png" },
    { name: "18.png" },
    { name: "19.png" },
    { name: "20.png" }
  ]);

  const [randomArr, setRandomArr] = useState([]);

  const onOpen = () => {
    let i = 1;
    let t = setInterval(() => {
      if (i > randomCount) return clearInterval(t);
      setRandomArr(getRandomArr(state.length, randomNum));
      i += 1;
    }, 300);
  };

  return (
    <div className="wrapper">
       <button onClick={onOpen}>开始</button>
       <div className="container">
      {randomArr.map((i) => {
        return <div className="randomItem" key={i}><img src={state[i].name}/><h2 className="name">{state[i].name.split('.')[0]}</h2></div>;
      })}
    </div>

   
    </div>
  );
};

export default App;
