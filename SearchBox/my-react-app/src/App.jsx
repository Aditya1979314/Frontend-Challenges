import { useCallback, useMemo, useRef, useState } from "react"
import Input from "./components/Input";
import SearchButton from "./components/SearchButton";
import SearchTag from "./components/SearchTag";
import Data from "./Data/Data"
import useDebounce from "./Hooks/useDebounce";

function App() {
const [filterdata,setfilterdata] = useState([]);
const[loading,setloading] = useState(false);
const cache = useRef({});


const onchangehandler = useCallback((value)=>{
const query = value.trim().toLowerCase();

if(!query){
  setfilterdata([])
  return 
}

if(cache.current[query]){
  setfilterdata(cache.current[query]);
  return ;
}


  let filteredData = Data.filter((item)=>item.toLowerCase().includes(query)).slice(0,10);
  setfilterdata(filteredData);
  cache.current[query] = filteredData;

},[])

const debouncedhandler = useDebounce(onchangehandler,300);

console.log(cache.current);

  return (
    <>
    <div>
      <Input placeholder={"Enter the value"} onchangefunction={(e)=>debouncedhandler(e.target.value)}/>
      <SearchButton value={"Search"}/>
    </div>
    <div>
{

loading ? (
  <div>...loading</div>
):
  filterdata.length > 0 && filterdata.map((val)=>{
    return (
      <SearchTag key={val} value={val}/>
    )
  }) 
}
</div>
    </>
  )
}

export default App
