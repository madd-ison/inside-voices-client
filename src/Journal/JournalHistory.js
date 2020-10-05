import React, {Fragment, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import EditPost from './EditPost'
import config from '../config'

const JournalHistory = () => {

    const [journals, setJournals] = useState([])

    //delete post
    const deletePost = async (id) => {
        try {
            const deletePost = await fetch(`http://localhost:8000/api/journal/${id}`, {
                method: "DELETE"
            })

            setJournals(journals.filter(journal => journals.id !== id))
            window.location = '/journal'

        } catch (err) {
            console.error(err.message)
        }
    }

    const getJournals = async () => {
        try {
            const response = await fetch(`${config.API_ENDPOINT}`)
            const jsonData = await response.json()

            setJournals(jsonData)

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getJournals()
    }, [])
    return (
        <Fragment>
           {journals.map(journal => (
               <section key={journal.id}>
                   <h3>{journal.title}</h3>
                   <p>{journal.content}</p>
                   <Link to={`/journal/${journal.id}`}><button>Edit</button></Link>
                   <button onClick={() => deletePost(journal.id)}>Delete</button>
               </section>
           ))}
        </Fragment>
    )
}
export default JournalHistory