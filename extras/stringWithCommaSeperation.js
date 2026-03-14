

const StringWithComma = ()=>{
    const [output , setOutput ]= useState('');
        let str = "balenciaga";

    const handleClick =()=>{
        const result = str.split("").join('');
        setOutput(result);
    }

    return (
        <div>
            <button onClick={handleClick}>
                Split
            </button>
            <p>{output}</p>
        </div>
    )
}