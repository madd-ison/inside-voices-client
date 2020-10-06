import React, {Fragment, useState} from 'react'

const NewPost = () => {
    const [content, setContent] = useState('')

    const onSubmitForm = async(e) => {
        e.preventDefault()
        try {
            const newEntry = {content}
            const response = await fetch('http://localhost:8000/api/journal', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newEntry)
            })
            window.location = '/journal'
        } catch (err) {
            console.error(err.message)
        }
    }
    return (
        <div>
            <h3 className='journal-intro'>Imagine looking through 
                a telescope into the present moment - this here, 
                this now. The past and the future are out of focus.</h3>
            <section id='new-entry'>
            <form id='new-entry' onSubmit={onSubmitForm}>
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
                    value={content}
                    onChange={e => setContent(e.target.value)}
                 />
                <br />
                <button 
                    type='submit'
                >Post</button>
            </form>
            </section>
        </div>
    )
}
export default NewPost