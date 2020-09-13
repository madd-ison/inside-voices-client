import React from 'react'
import store from '../store.js'
import './Resources.css'
import ResourceComponent from './ResourceComponent.js'

function Resources() {
    const list = store.aid.map(aid => {
        return (
            <section id='resource-component'>
                <ResourceComponent
                    key={aid.aid_id}
                    name={aid.aid_name}
                    contact={aid.contact}
                    description={aid.aid_description} />
            </section>)
        })
    return (
        <div id='resources-list'>
            {list}
        </div>
    )
}

export default Resources