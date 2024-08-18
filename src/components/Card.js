import { useState } from "react";


function Card({id,image,info,price,name,removeTour}){

    const[readmore,setReadmore]=useState(false);
    const description =readmore ? info :`${info.substring(0,200)}....`;
                        

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    

    return(
            <div className="rounded-md border-2 shadow-md shadow-slate-600 hover:shadow-lg border-slate-500 p-5 ">
                <img className="rounded-md mb-5"  src={image}></img>
                <div className="mb-5" >
                    <div>
                        <h4 className="text-green-400 text-xl font-bold" >{price}</h4>
                        <h4 className="text-red-500 text-lg font-medium" >{name}</h4>
                    </div>
                    <div className="text-white" >
                        {description}
                        <span className="text-blue-400 hover:cursor-pointer" onClick={readmoreHandler}>
                            {readmore ? `show less`:`read more`}
                        </span>
                    </div>
                </div>
                <button className="bg-slate-500 px-5 py-2 hover:cursor-pointer text-white rounded-md" onClick={()=> removeTour(id)}>
                    Not Interested
                </button>
            </div>
    );
}
export  default Card;