import React, {useState} from 'react'
import config from '../config'
import TokenService from '../services/token-service'
import '../App/Buttons.css'
import './Journal.css'

const NewPost = () => {
    const [content, setContent] = useState('')

    const onSubmitForm = async(e) => {
        e.preventDefault()
        try {
            const newEntry = {content}
            await fetch(`${config.API_ENDPOINT}/api/journal`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `bearer ${TokenService.getAuthToken()}`,
                    },
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
                <textarea className='new-post'
                    rows={10}
                    cols={60}
                    wrap='hard'
                    name='newEntry'
                    value={content}
                    onChange={e => setContent(e.target.value)}
                 />
                <br />
                <button id='post-journal' className='big-button' 
                    type='submit'
                >Post</button>
            </form>
            </section>
        </div>
    )
}
export default NewPost