import React from 'react'
import './Journal.css'
import JournalHistory from './JournalHistory'
import NewPost from './NewPost'

// getJournals 

function Journal() {
    return (
        <div className='journal'>
            <NewPost />
            <JournalHistory />
        </div>
    )
}

export default Journal