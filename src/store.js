export default {
    'users': [
        {
            'user_id': 1111,
            'username': 'username',
            'password': 'password'
        },
    ],
    'journals': [
        {   
            'journal_id': 1,
            'user_id': 1111,
            'date': '2020-09-10',
            'content': 'This is my third journal entry!'
        },
        {   
            'journal_id': 2,
            'user_id': 1111,
            'date': '2020-09-09',
            'content': 'This is my second journal entry.'
        },
        {   
            'journal_id': 3,
            'user_id': 1111,
            'date': '2020-09-08',
            'content': 'dear diary...'
        }
    ],
    'meditations': [
        {
            'med_id': 333,
            'type': 'guided',
            'title': '21 Days of Abundance - Day 1',
            'author': 'Deepak Chopra',
            'file': 'https://soundcloud.com/inspiosphere-soundsphere/day-1-21-days-of-abundance-meditation'
        },
        {
            'med_id': 222,
            'type': 'instrumental',
            'title': '417hz',
            'author': null,
            'file': 'https://soundcloud.com/mindbodyharmonics/417hz'
        }
    ],
    'aid': [
        {
            'aid_id': 11,
            'aid_type': 'food',
            'aid_image': 'url',
            'aid_name': 'Community Fridges',
            'aid_description': 'description',
            'contact': 'contact info'
        },
        {
            'aid_id': 22,
            'aid_type': 'wellness',
            'aid_image': null,
            'aid_name': 'OpenPath',
            'aid_description': 'OpenPath helps you find low cost and sliding scale mental healthcare.',
            'contact': 'contact info'
        },
        {
            'aid_id': 33,
            'aid_type': 'etc',
            'aid_image': 'logo',
            'aid_name': 'Hotline',
            'aid_description': 'Call this number for legal advice.',
            'contact': '777-777-7777'
        },
        {
            'aid_id': 44,
            'aid_type': 'housing',
            'aid_image': null,
            'aid_name': 'Housing Works',
            'aid_description': 'A New York City based non-profit fighting the twin crises of AIDS and homelessness.',
            'contact': 'phone #'
        }
    ]

}