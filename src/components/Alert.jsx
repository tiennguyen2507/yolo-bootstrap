import React from 'react'

const Alert = props => {
    
    
    return (
        <div className={`cp-alert ${props.active01}`}>
            <div className='cp-alert__container'>
                <div className="cp-alert__container__tilte">
                        <p>{props.children}</p>
                        <button onClick={props.funcc}>Ok hihi!</button>
                </div>
            </div>
        </div>
    )
}


export default Alert
