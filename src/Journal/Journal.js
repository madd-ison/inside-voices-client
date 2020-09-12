import React from 'react'
import store from '../store'
import './Journal.css'
import Posts from '../Posts/Posts'

function Journal() {
    const journalEntry = store.journals.map(entry => 
                <Posts key={entry.journal_id}  date={entry.date} content={entry.content}/>)
    return (
        <div className='journal'>

        <div className='journal-intro'>
            <h3>Take a moment to observe.</h3>
            <br />
            <p>Imagine looking through a telescope into the present moment - this here, this now. 
            The past and the future are out of focus.</p>
        </div>

        <section id='new-entry'>
            <form id='new-entry'>
            <select id='journal_prompt'>
                <option>How are you today?</option>
                <option>Tell yourself what you need to hear.</option>
                <option>What's a plan of action for right *now*?</option>
              </select>
              <br />
                <textarea
                    rows={10}
                    cols={60}
                    wrap='hard'
                    name='newEntry'
                 />
                <br />
                <button type='submit'>Post</button>
            </form>
            </section>

            <div className='posted'>
                <h3>Past Entries</h3>
                {journalEntry}
            </div>
        </div>
    )
}

export default Journal