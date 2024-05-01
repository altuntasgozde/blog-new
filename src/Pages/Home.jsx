import React from 'react'

export const Home = ({ entries }) => {
  
    return (
        <div>
            <div className='container mx-auto px-24 flex items-center flex-col'>
                <div>
                    {/* {entries.slice(0).reverse().map((entry, index) => */}
                    {entries.map((entry, index) =>

                        <div key={index} className='border border-gray-400 p-5 rounded-lg mt-5'>
                            <p className='font-bold'>{entry.attributes.title}</p>
                            <p>{entry.attributes.body}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
