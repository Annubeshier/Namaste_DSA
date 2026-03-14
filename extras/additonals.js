import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, [url]);
  return { data, isLoading };
};

****************************************** 

const categories = [
  { name: "Fruits", items: ["Apple", "Banana"] },
  { name: "Veggies", items: ["Carrot", "Tomato"] },
];

return (
  <div>
    {categories.map((cat) => (
      <div key={cat.name}>
        <h1>{cat.name}</h1>
        <ul>
          {cat.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

***********************************8

const AsyncFetch =()=>{

    const [data , setData] = useState([]);

    useEffect(()=>{
        const fetchData =  async ()=>{
            const response = await fetch('https://google.com');
            const data = await response.json();
            setData(data);
        }
        fetchData();
    },[])
}

***************************************
const DebouncedValue = ()=>{
    const [value , setValue ]= useState();
    const [debouncedValue, setDebouncedValue]= useState(value);

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, 300);
        return ()=>{
            clearTimeout(handler);
        }
    },[value]);

    return(
        <div>
        <input type='text' value={value} onChange={(e)=> setValue(e.target.value)} placeholder={'enter your name'}  />        
        </div>
    )
}

******************


const initialState = { count: 0 };

const  reducer = (state , action )=>{

    switch(action.type){
        case 'increment': return {count : state.count + 1};
        case 'decrement': return {count : state.count - 1};
    }
}

const Counter ()=>{
    const [count , dispatch]  = useReducer(reducer , initialState);

    return (
        <h2>{count}</h2>
        <button  onclick={()=>dispatch({type : 'increment'})}>Increment</button>
    )
}