import React from 'react'

const EventHandling = () => {
  return (
    <div className="w-[80%] mx-auto">

        <h1 className="text-center my-5 font-bold text-3xl">Event Handling</h1>

        <button className="bg-black text-white p-3"
            onClick={ () => { alert('button was clicked') } } 
        >Click Event</button>

    </div>
  )
}

export default EventHandling;