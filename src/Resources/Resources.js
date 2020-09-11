import React from 'react'
import store from '../resources-store.js'
import './Resources.css'
import ResourceComponent from './ResourceComponent.js'

function Resources() {
    const list = store.aid.map(aid => {
        return (
            <div id='resource-component'>
                <ResourceComponent
                    name={aid.aid_name}
                    contact={aid.contact}
                    description={aid.aid_description} />
            </div>)
        })
    return (
        <div id='resources-list'>
            {list}
        </div>
    )
}

export default Resources