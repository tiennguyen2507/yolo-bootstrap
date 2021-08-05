import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const Alert = props => {
    const [display, setdisplay] = useState('flex')
    const close =()=>{
        setdisplay('none')
    }
    useEffect(() => {
        if (props.children ==="") {
            setdisplay('none')
        } else{
            setdisplay('flex')
        }
        
    }, [props.children])
    return (
        <div className='cp-alert' style ={{display: display}}>
            <div className='cp-alert__container'>
                <div className="cp-alert__container__tilte">
                        <p>{props.children}</p>
                        <button onClick={close}>Ok hihi!</button>
                </div>
                
            </div>
        </div>
    )
}
Alert.propTypes = {
    display:PropTypes.string.isRequired
    
}

export default Alert
