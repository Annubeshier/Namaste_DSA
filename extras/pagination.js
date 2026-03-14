import {useState} from "react";

export default function App() {
 const [currentPage , setCurrentPage] = useState(1);
    const data = Array.from({length:100}, (_, i)=>`Item ${i+1}`);
    const itemsPerPage = 20;
    const lastIndex = itemsPerPage*currentPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = data.slice(firstIndex , lastIndex);
    const totalPages = Math.ceil(data.length/itemsPerPage);

return (
    <div>
        <h2>Pagination</h2>
            {currentItems.map((item,index)=> (
           <p key={index}>{item}</p>
            ))}
        <div>
            <button 
                disabled={currentPage === 1} 
                onClick={()=> setCurrentPage(currentPage - 1)}>
                Prev
            </button>
                {[...Array(totalPages)].map((_,i)=>(
                <button
                      key={i}
                        onClick={()=> setCurrentPage(i+1)}
                    >{i+1}
                </button>
                ))}
            <button
                disabled={currentPage === totalPages}
                        onClick={()=> setCurrentPage(currentPage+1)}>
                Next
            </button>
        </div>
    </div>
)
    
}
