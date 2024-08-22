function Todolist({todo}) {
    return(
<>
{todo.map((d,i)=>{
    console.log(d);
    
        return(
         <>
            <div  className="py-4">
                <div className="flex items-center">
                    <input id="todo1" name="todo1" type="checkbox"
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"></input>
                    <label for="todo1" className="ml-3 block text-gray-900">
                        <span className="text-lg font-medium">{d.todos1} | {d.todos2} | {d.todos3} </span>
                      
                <button
                    className="ml-11 flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button">
                    Remove
                </button>
                    </label>
                </div>
            </div>
            
            </>
        )
    })}
</>
    )
}

export default Todolist

