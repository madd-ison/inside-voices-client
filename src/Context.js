import React, {Component} from 'react'

const AppContext = React.createContext()

class AppContextProvider extends Component {
    state = {
        isLoggedIn: [],
        journals: [],
        currentUser: []
    }

    signUp = () => {}
    logIn = () => {}
    getJournals = () => {}
    postJournal = () => {}
    editJournal = () => {}
    deleteJournal = () => {}
    
    render() {
        return (
            <AppContext.Provider value={{
                loggedIn: this.state.isLoggedIn,
                journals: this.state.journals,
                currentUser: this.state.currentUser,
                signUp: this.signUp,
                logIn: this.logIn,
                getJournals: this.getJournals,
                postJournal: this.postJournal,
                editJournal: this.editJournal,
                deleteJournal: this.deleteJournal
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export {AppContextProvider, AppContext}