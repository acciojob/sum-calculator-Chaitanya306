import React, { useEffect } from 'react'

const SumCalculator = () => {
  const [nums, setNums] = React.useState([]);
  const[sum, setSum] = React.useState(0);
  useEffect(() => { 
    const total = nums.reduce((acc, num) => acc + parseInt(num), 0);
    setSum(total);
   },[nums])
  return (
    <div>
        <h1>Sum Calculator</h1>
      <input type='number' onChange={(e)=>setNums([...nums,e.target.value])} />
      <p>Sum: {sum}</p>
    </div>
  )
}

export default SumCalculator
