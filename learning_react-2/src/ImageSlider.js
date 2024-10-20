
import { useEffect, useState } from "react";


const data = ["https://wallpapers.com/images/hd/random-background-1280-x-800-9lscltpwc61kjbj2.jpg",
    "https://img.freepik.com/free-vector/gradient-black-background-with-cubes_23-2149160350.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtNU2MmTmOmYk33WelK7LssKRyPtssMjpE0w&s",
    "https://wallpapers.com/images/hd/random-pictures-zxti3l8kfhl5ojbh.jpg",
    "https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2151151081.jpg"
]

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
        <div className="flex justify-center">
            <button className=' text-black p-4 bg-slate-500' onClick={previous} > Previous </button>
            
            <div className="flex justify-between">
                {data.map((url,idx)=>
                    <img src={url} 
                        className={"w-[700px] h-[300px] object-cover "+ (active == idx ? "block":"hidden ") } alt = "Wallpaper" key={url}/>
                )}
            </div>
            
            <button className=' text-black p-4 bg-slate-500 ' onClick={next}> Next </button>


        </div>
    </>
}

export default ImageSlider;