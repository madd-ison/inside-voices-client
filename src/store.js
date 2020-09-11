export default {
    'users': [
        {
            'user_id': 1
        },
        {
            'user_id': 2
        },
        {
            'user_id': 3
        }
    ],
    'journals': [
        {   
            'journal_id': 1,
            'user_id': 1,
            'date': '020-09-10T00:00:00.000Z',
            'content': 'This is my first journal entry!'
        },
        {   
            'journal_id': 1,
            'user_id': 2,
            'date': '2020-09-09T00:00:00.000Z',
            'content': 'This is MY first journal entry.'
        },
        {   
            'journal_id': 1,
            'user_id': 3,
            'date': '2020-09-08T00:00:00.000Z',
            'content': 'dear diary...'
        }
    ],
    'meditations': [
        {
            'med_id': 1,
            'type': 'guided',
            'title': '21 Days of Abundance',
            'author': 'Deepak Chopra',
            'file': 'audiofile'
        },
        {
            'med_id': 2,
            'type': 'guided',
            'title': 'Spirit Body',
            'author': 'Gillian Walsh',
            'file': 'audiofile'
        },
        {
            'med_id': 3,
            'type': 'instrumental',
            'title': '417hz',
            'author': null,
            'file': 'audiofile'
        }
    ],
}