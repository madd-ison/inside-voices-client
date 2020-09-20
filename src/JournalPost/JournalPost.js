import React from 'react'

function JournalPost(props) {
    return(
        <div id='post'>
            <h1>{props.date}</h1>
            <p>{props.content}</p>
            <button>Edit Post</button><button>Delete Post</button>
        </div>
    )
}

export default JournalPost