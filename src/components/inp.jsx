function Todoinp({onChange1,onChange2,onChange3,onClick, value1,value2,value3}) {
    console.log(value1,value2,value3);
    
    return(
<>
    <form className="w-full max-w-sm mx-auto px-4 py-2">
    <div className=" flex items-center border-b-2 border-teal-500 py-2 ">
        <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        value={value1}  onChange={onChange1}  type="text"  placeholder="Name" id="name" required></input>
        <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            value={value2}     onChange={onChange2}   type="number"  placeholder="Roll num" id="roll_num" required></input>
        <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            value={value3}   onChange={onChange3}   type="text"  placeholder="Father name" id="father_name" required></input>
         
        <button
    
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button" onClick={onClick}>
            Add
        </button>

      
    </div>

</form>
</>
    )
}

export default Todoinp