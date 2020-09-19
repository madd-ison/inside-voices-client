import React, {useContext} from 'react'
import {AppContext} from '../Context'
import {v4 as uuid} from 'uuid'
import store from '../store'

//postJournal

function NewJournal() {
    const {journals, postJournal} = useContext(AppContext)

    const handleEntry = e => {
        e.preventDefault()
        const newPost = {
            journal_id: uuid(),
            user_id: '',
            date: new Date(),
            content: e.target['newEntry'].value
        }
        store.journals.push(newPost)
    }

    return (
        <section id='new-entry'>
            <form id='new-entry' onSubmit={handleEntry}>
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
                >Post</button>
            </form>
            </section>
    )
}

export default NewJournal

NewJournal.defaultProps = {
    history: {
        push: () => {}
    },
}