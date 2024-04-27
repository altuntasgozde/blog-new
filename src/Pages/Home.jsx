import React from 'react'

export const Home = ({entries}) => {
    return (
        <div>
            <div className='container mx-auto px-24 flex items-center flex-col'>
                {entries.map((entry,index) => 
                <div key={index}>
                <p>{entry.input}</p>
                <p>{entry.textarea}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
