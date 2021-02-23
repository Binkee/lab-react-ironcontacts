import React from 'react'

export default function ContactDetails(props) {
    return (
        <div>
            
           <img src={props.picture} />
           {props.name}
            {props.popularity}
            <button 
            onClick={() => { props.onDelete(props.id)  }} >Delete</button>
        </div>
    )
}
