import React, {useEffect, useState} from 'react'
// import {Link} from 'react-router-dom'
import config from '../config'
import moment from 'moment'
import TokenService from '../services/token-service'
// import EditPost from './EditPost'

const JournalHistory = () => {

    const [journals, setJournals] = useState([])

    //delete post
    const deletePost = async (id) => {
        try {
            await fetch(`http://localhost:8000/api/journal/${id}`, {
                method: "DELETE",
                headers: {
                    'Authorization': `bearer ${TokenService.getAuthToken()}`,
                }
            })

            setJournals(journals.filter(journal => journal.id !== id))
            window.location = '/journal'

        } catch (err) {
            console.error(err.message)
        }
    }

    // `${config.API_ENDPOINT}/journals?userId=${userId}`

    const getJournals = async () => {
        try {
            const response = await fetch(`${config.API_ENDPOINT}`, {
                headers: {
                    'Authorization': `bearer ${TokenService.getAuthToken()}`,
                }
            })
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
        <div>
           {journals.map(journal => (
               <section key={journal.id}>
                   <h3>{moment(journal.title).format("LL")}</h3>
                   <p>{journal.content}</p>
                    {/* <Link to={`/journal/${journal.id}`}>
                        <EditPost journal={journal} content={journal.content} />
                    </Link> */}
                   <button onClick={() => deletePost(journal.id)}>Delete</button>
               </section>
           ))}
        </div>
    )
}
export default JournalHistory