import { useState } from "react"


const UseStateCountEX = () => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount((preCount) => {
            return preCount + 1
        })

        setCount((preCount) => preCount + 1)
    }

    const decrementCount = () => {
        setCount((preCount) => preCount - 1)
        setCount((preCount) => preCount - 1)
    }
    return (
        <div>
            <button onClick={decrementCount}>-</button>
            <span>Count:{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default UseStateCountEX