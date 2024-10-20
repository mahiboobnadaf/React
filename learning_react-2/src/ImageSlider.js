
import { useEffect, useState } from "react";
import {data} from "./staticFiles.js"


const ImageSlider = () =>{
    const [active, setActive] = useState(0);

    function previous(){
        (active != 0) ? setActive(active-1) : setActive(data.length-1);
    }

    function next(){
        (active != data.length-1) ? setActive(active+1) : setActive(0);
    }

    useEffect(()=>{
        const timer= setTimeout(()=>{
            next();
        },3000);

        return ()=> clearTimeout(timer);
    },[active])

    return <>
        <div className="flex justify-center gap-5 p-5">
            
            <div className="flex justify-between">
                {data.map((url,idx)=>
                    <img src={url} 
                        className={"w-[700px] h-[300px] object-cover "+ (active == idx ? "block":"hidden ") } alt = "Wallpaper" key={url}/>
                )}
            </div>

        </div>
        <div className="flex justify-center p-10 gap-5">
            <button className=' text-black p-4 bg-slate-500' onClick={previous} > Previous </button>
            <button className=' text-black p-4 bg-slate-500' onClick={next}> Next </button>
        </div>

    </>
}

export default ImageSlider;