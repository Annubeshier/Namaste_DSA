const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);
  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{time} seconds</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;




/*

const promise = new Promise((resolve , reject)=>{
let success = true;
if(success){
resolve("Promise resolved successfully");}
    }
else{
    reject("Promise rejected");}
promise.then((response)=> console.log(response)).catch((error)=> console.log(error));



async function getData(){
const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
const data = await response.json();
}
getData();
*/
