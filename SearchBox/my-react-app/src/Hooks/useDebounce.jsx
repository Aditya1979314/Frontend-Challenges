import { useRef } from "react";

export default function useDebounce(fn,delay){
    let timer = useRef();

  return (e)=>{
    clearTimeout(timer.current);

    timer.current = setTimeout(()=>{
      fn(e);
    },delay);
  }
}