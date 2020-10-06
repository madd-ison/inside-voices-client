// import React, {useState} from 'react'
// import config from '../config'

// const EditPost = ({journal}) => {

    // const [update, setUpdate] = useState('')

    // const updateJournal = async e => {
    //     e.preventDefault()
    //     try {
    //         const body = {update}
    //         const response = await fetch(`${config.API_ENDPOINT}/${journal.id}`, 
    //         {
    //             method: "PATCH",
    //             headers: {"Content-Type": "application/json"},
    //             body: JSON.stringify(body)
    //         })

    //     } catch (err) {
    //         console.error(err.message)
    //     }
    // }
//     return (
//         <div>
//         </div>
//     )
// }
// export default EditPost