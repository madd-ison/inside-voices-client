import React, {Fragment, useState} from 'react'

const EditPost = ({journal}) => {
    const [content, setContent] = useState(journal.content)

    const updateJournal = async e => {
        e.preventDefault()
        try {
            const body = {content}
            const response = await fetch(`http://localhost:8000/api/journal/${journal.id}`, 
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response)
        } catch (err) {
            console.error(err.message)
        }
    }
    return (
        <Fragment>
            <button>Edit</button>
        </Fragment>
    )
}
export default EditPost