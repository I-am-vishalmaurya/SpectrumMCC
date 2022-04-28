import React from 'react'

export default function Hero() {
  return (
    <div className="relative h-screen lg:h-screen w-full bg-cover bg-no-repeat">
        <div className="h-full container mx-auto flex items-center justify-center">
            <div className="flex flex-col items-center z-10">
                <h1 className="mx-6 mt-1 text-xl font-bold text-center text-white text-5xl md:text-6xl sm:text-center sm:mx-0">Here a really cool title!</h1>
                <p className="text-white text-xl font-medium w-2/3 text-center my-6">Some fancy text to invite to an event, the place of the event and the date of the event.</p>
                <div className="flex flex-col md:flex-row justify-center mt-10">
                    <a href="/" className="py-2 px-8 rounded-full border-2 border-pink-500 text-white hover:bg-pink-500 text-center m-2">Tickets</a>
                    <a href="/" className="py-2 px-8 rounded-full border-2 border-pink-500 text-white bg-pink-500 hover:bg-transparent text-center m-2">Coming soon</a>
                </div>
            </div>

        </div>
    </div>

  )
}
