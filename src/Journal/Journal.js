import React from 'react'
import store from '../store'
import './Journal.css'
import JournalHistory from '../JournalHistory/JournalHistory'
import NewJournal from '../Forms/NewJournal'

// getJournals 

function Journal() {
    const journalEntries = store.journals.map(entry =>
                <JournalHistory key={entry.journal_id}  date={entry.date} content={entry.content}/>)
    return (
        <div className='journal'>

        <div className='journal-intro'>
            <h3>Take a moment to observe.</h3>
            <br />
            <p>Imagine looking through a telescope into the present moment - this here, this now. 
            The past and the future are out of focus.</p>
        </div>

        <NewJournal />

            <div className='posted'>
                <h3>Past Entries</h3>
                <div>
                {journalEntries}
                </div>
            </div>
        </div>
    )
}

export default Journal