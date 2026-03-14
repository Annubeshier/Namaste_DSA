


const FetchData =()=>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchDataFromAPI =  async ()=>{
            const res = await fetch("https://ww.jldfjl");
            const resData = await res.json();
            setData(resData);
        }
        fetchDataFromAPI();
    },[])
    /*USING AXIOS
    useEffect(()=>{
        const res = axios.get("https://hdkjg").then(response => setData(response.data))
        },[])
    */
   /*
   useEffect(()=>{
     fetch("https://hfkjfhg").then(resp => resp.json()).then(response => setData(response.data)).catch(error=> console.log(error))
    },[])
   */

    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}