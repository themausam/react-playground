import React, { useState, useEffect } from 'react';

const data = ['foo', 'bar']

const MyHook = () => {
  const [count, setCount] = useState(0)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    doSomething();
  })

  const doSomething = () => {
    setMessages(data)
  }
  
  return (
    <div>
      <p>You clicked {count} times</p>
      {
          data.map(d => <span>{d + ' '}</span>)
      }
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default MyHook;