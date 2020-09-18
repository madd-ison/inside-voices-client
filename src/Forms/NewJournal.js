import React, {useContext} from 'react'
import {Context} from '../Context'

//postJournal

function NewJournal() {
    const {postJournal} = useContext(Context)
    return (
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
                <button 
                    type='submit'
                    // onSubmit={postJournal}
                >Post</button>
            </form>
            </section>
    )
}

export default NewJournal