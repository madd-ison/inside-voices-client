import TokenService from './token-service'
import config from '../config'

const JournalApiService = {
  getJournals() {
    return fetch(`${config.API_ENDPOINT}/journals`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getJournal(journalId) {
    return fetch(`${config.API_ENDPOINT}/journal/${journalId}`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default JournalApiService