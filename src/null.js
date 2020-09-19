import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import store from './store'

const Context = React.createContext()

function ContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    const [journals, setJournals] = useState([])

    const signUpUser = async (user) => {
        const id = uuid()
        store.users.push({...user, id})
        return user
      }

    const loginUser = async (username, password) => {
        return store.users.find(user => user.username === username.trim().toLowerCase() && user.password === password.trim())
      }

    function getJournals() {

    }

    function postJournal() {

    }
    
    function deleteJournal(journal_id) {
        setJournals(prevJournals => prevJournals.filter(journals => journals.journal_id !== journal_id))
    }

    function updateJournal() {

    }

    return (
        <Context.Provider value={{
            isLoggedIn,
            currentUser,
            journals,
            signUpUser,
            loginUser,
            getJournals,
            postJournal,
            deleteJournal,
            updateJournal
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}