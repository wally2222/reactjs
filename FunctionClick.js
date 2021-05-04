import React from 'react' 

function FunctionClick() {

    function clickHandler() {
        console.log('Button clicked')
    }
    return (
        <div>
        //  ! we don't use call function and we use {} in reactjs
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
