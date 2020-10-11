import React from 'react'
import {Link} from 'react-router-dom'
import './Journal.css'
import JournalHistory from './JournalHistory'
import NewPost from './NewPost'

// getJournals 

function Journal() {
    return (
        <div className='journal'>
        <div id='back'>
            <Link to='/home'>
                <button className='small-button'>Back</button>
                </Link>
        </div>
            <NewPost />
            <JournalHistory />
        </div>
    )
}

export default Journal