import React from 'react'
import {Link} from 'react-router-dom'
import JournalPost from '../JournalPost/JournalPost'
import store from '../store'

//deleteJournal, updateJournal

function JournalHistory(props) {
    // const handleDelete = e => {
    //     e.preventDefault()
    //     const journalId = props.id
    //     const updated = store.journals.filter(journalId)
    //         return updated

    // }
    const journalId = props.id
    return (
        <div className='entry'>
            <section id='posted-entries'>
            <Link to={`/journal/${journalId}`}><h1>{props.date}</h1></Link>
            </section>
        </div>
    )
}
export default JournalHistory