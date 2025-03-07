import React, { useEffect, useState } from "react";
const Count = () => {
    const [count, setCount] = useState(0)
    const [error,setError]=useState()
    // useEffect(()=>{},[])
    //---API Integration-----//
    const fetchData = async () => {
        // const data = {
        // }
        try {
            const response = await fetch('https://dummyjson.com/comments')
            console.log(response)
            // const d1=await response.json()
        } catch {
         setError('No API call')
        }
    }
    fetchData()
    return (
        <div>
            <div>You clicked  {count}  Times</div>
            <button onClick={() => setCount(count + 1)}>CountButton</button>
        </div>
    )
}
export default Count;