const prs = [
    {
        id: 1,
        repo: 'FIN-STR-AnFS-DataAggregator',
        title: 'Output Paths and Parameters Updated',
        authors: [{name: 'TM'},{name: 'JD'}],
        comments: [
            {
                key: '1-1',
                thread: '/Source/Notebooks/RIAttachmentsNotebook.py',
                user: 'Tony',
                comment: [`This collection step remains horribly slow, taking over 45 minutes in my latest run. My brain is fried so I'm open to ideas and suggestions for rendering data from this table in a more effective manner.
                         (The point of this code is to get the ISO 3166 Alpha-2 code that corresponds to each company code which is then used in the filenames)`
                ]
            },
            {
                key: '1-2',
                thread: '/Source/Notebooks/RIAttachmentsNotebook.py',
                user: 'Jacob',
                comment: [`Working with Joe's code yesterday, it did the same thing, but it was quick. Idk about the number of CompanyCodes you're filtering on here, but he filters at the "get dfSourceCompanyCode" step. Maybe try move it there?`]
            },
            {
                key: '1-3',
                thread: '/Source/Notebooks/RIAttachmentsNotebook.py',
                user: 'Tony',
                comment: [`I was using a whole 2 company codes. But I'll definitely try elsewhere to see if there's a meaningful difference`]
            },
            {
                key: '1-4',
                thread: '/Source/Notebooks/RIAttachmentsNotebook.py',
                user: 'Tony',
                comment: [`Never mind, I lied. My brain really is fried! The time it took was entirely the file copy 😅
                          So I think we're probably fine-ish for now and the real improvement is to better parallelize filesystem copies where possible.`]
            },
        ]
    },
    {
        id: 1,
        repo: 'FIN-STR-AnFS-DataAggregator',
        title: 'Output Paths and Parameters Updated',
        authors: [{name: 'TM'},{name: 'JD'}],
        comments: [
            {
                key: '1-1',
                thread: '/Source/Notebooks/RIAttachmentsNotebook.py',
                user: 'Tony',
                comment: [`This collection step remains horribly slow, taking over 45 minutes in my latest run. My brain is fried so I'm open to ideas and suggestions for rendering data from this table in a more effective manner.
                         (The point of this code is to get the ISO 3166 Alpha-2 code that corresponds to each company code which is then used in the filenames)`
                ]
            },
            {
                key: '1-2',
                thread: '/Source/Notebooks/RIAttachmentsNotebook.py',
                user: 'Jacob',
                comment: [`Working with Joe's code yesterday, it did the same thing, but it was quick. Idk about the number of CompanyCodes you're filtering on here, but he filters at the "get dfSourceCompanyCode" step. Maybe try move it there?`]
            },
            {
                key: '1-3',
                thread: '/Source/Notebooks/RIAttachmentsNotebook.py',
                user: 'Tony',
                comment: [`I was using a whole 2 company codes. But I'll definitely try elsewhere to see if there's a meaningful difference`]
            },
            {
                key: '1-4',
                thread: '/Source/Notebooks/RIAttachmentsNotebook.py',
                user: 'Tony',
                comment: [`Never mind, I lied. My brain really is fried! The time it took was entirely the file copy 😅
                          So I think we're probably fine-ish for now and the real improvement is to better parallelize filesystem copies where possible.`]
            },
        ]
    },
];

export default prs;