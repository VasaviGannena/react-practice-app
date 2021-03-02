import React, {useState} from 'react';
import './Count.css';

export const Count = () => {
  const [count, setCount] = useState(0)
  console.log('useState Render')
  return(
    <div className="counter">
      <button onClick={()=>setCount(count =>count+1)}>
        count - {count}
      </button>

    </div>
  )
}
export default Count;