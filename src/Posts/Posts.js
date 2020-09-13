import React from 'react'

function Posts(props) {
    return (
        <div className='entry'>
            <section id='past-entries'>
                <h1>{props.date}</h1>
                <p>{props.content}</p>
                <button>Edit Post</button><button>Delete Post</button>
            </section>
        </div>
    )
}

export default Posts