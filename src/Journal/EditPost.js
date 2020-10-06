import React, {useState} from 'react'
import config from '../config'

const EditPost = (props) => {

    const [content, setContent] = useState(props.content)

    const updateJournal = async e => {
        e.preventDefault()
        try {
            const body = {content}
            const response = await fetch(`${config.API_ENDPOINT}/${props.journal.id}`, 
            {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

        } catch (err) {
            console.error(err.message)
        }
    }
    return (
        <section>
         <p>{content}</p>
        </section>
    )
}
export default EditPost