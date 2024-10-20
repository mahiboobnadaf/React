
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
        <div className="flex justify-center p-10 gap-5 font-bold">
            <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={previous}>Previous</button>
            <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={next}>Next</button>

        </div>

    </>
}

export default ImageSlider;