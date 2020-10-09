import React, {useState, useEffect} from 'react'
import config from '../config'
import TokenService from '../services/token-service'

const EditPost = () => {

    const [journal, setJournal] = useState([])

    const getJournal = async (id) => {
        try {
            const response = await fetch(`${config.API_ENDPOINT}/api/journal/${id}`, {
                headers: {
                    'Authorization': `bearer ${TokenService.getAuthToken()}`,
                }
            })
             const jsonData = await response.json()
            setJournal(jsonData)

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getJournal()
    }, [])

    // const updateJournal = async e => {
    //     e.preventDefault()
    //     try {
    //         const body = {content}
    //         const response = await fetch(`${config.API_ENDPOINT}/${props.journal.id}`, 
    //         {
    //             method: "PATCH",
    //             headers: {
    //                    "Content-Type": "application/json"},
    //                    'Authorization': `bearer ${TokenService.getAuthToken()}`
    //                       },
    //             body: JSON.stringify(body)
    //         })

    //     } catch (err) {
    //         console.error(err.message)
    //     }
    // }
    console.log(journal)
    return (
        <section>
            <p></p>
        </section>
    )
}
export default EditPost