import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
  
    const [counter, setcounter] = useState( 10 )

    const incrementar = useCallback(
      (value) => {
        setcounter((counterIncrement) => counterIncrement + value);
      },
      [],
    )
    
  
    return (
    <>
    <h1>useCallback Hook: { counter }</h1>
    <hr />

        <ShowIncrement increment={ incrementar }/>
    </>
  )
}
