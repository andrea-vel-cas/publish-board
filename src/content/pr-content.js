const prs = [
    {
        id: 10,
        repo: 'FIN-STR-AnFS-DataAggregator',
        title: 'Output Paths and Parameters Updated',
        authors: [{name: 'TM'},{name: 'JD'}],
        comments: [
            {
                key: '10-1',
                thread: '/Source/Notebooks/RIAttachmentsNotebook.py',
                user: 'Tony',
                comment: [`This collection step remains horribly slow, taking over 45 minutes in my latest run. My brain is fried so I'm open to ideas and suggestions for rendering data from this table in a more effective manner.
                         (The point of this code is to get the ISO 3166 Alpha-2 code that corresponds to each company code which is then used in the filenames)`
                ]
            },
            {
                key: '10-2',
                thread: '/Source/Notebooks/RIAttachmentsNotebook.py',
                user: 'Jacob',
                comment: [`Working with Joe's code yesterday, it did the same thing, but it was quick. Idk about the number of CompanyCodes you're filtering on here, but he filters at the "get dfSourceCompanyCode" step. Maybe try move it there?`]
            },
            {
                key: '10-3',
                thread: '/Source/Notebooks/RIAttachmentsNotebook.py',
                user: 'Tony',
                comment: [`I was using a whole 2 company codes. But I'll definitely try elsewhere to see if there's a meaningful difference`]
            },
            {
                key: '10-4',
                thread: '/Source/Notebooks/RIAttachmentsNotebook.py',
                user: 'Tony',
                comment: [`Never mind, I lied. My brain really is fried! The time it took was entirely the file copy 😅
                          So I think we're probably fine-ish for now and the real improvement is to better parallelize filesystem copies where possible.`]
            },
        ]
    },
    {
        id: 20,
        repo: 'FIN-STR-BSR-RI-MachineLearning',
        title: 'Add packages to install on the ML cluster',
        authors: [{name: 'MG'},{name: 'CH'},{name: 'DJ'}],
        comments: [
            {
                key: '20-1',
                thread: '/src/Dependencies/Whls/ReconDatabricks-2020.4.24.1-py3-none-any.whl',
                user: 'Chris',
                comment: [`Are we actively using any methods from this library ?`
                ]
            },
            {
                key: '20-2',
                thread: '/src/Dependencies/Whls/ReconDatabricks-2020.4.24.1-py3-none-any.whl',
                user: 'Malini',
                comment: [`Currently we are only using the LoggingHelper from ReconDatabricks/TaxDatabricks/STAR. We will create a common library in the near future that both RI/STAR can leverage and build on it as per specific needs. After that, we can eliminate these dependencies.`]
            },
            {
                key: '20-3',
                thread: '/src/Dependencies/Whls/ReconDatabricks-2020.4.24.1-py3-none-any.whl',
                user: 'Chris',
                comment: [`I was thinking we initially included ReconDatabricks to leverage the method Joe created but then decided not to go that route. So, I didnt know if we had any other dependencies.
                `]
            },
        ]
    },
    {
        id: 30,
        repo: 'FIN-STR-BSR-RI-ReconDatabase',
        title: 'Merge range(2020, 2022) to FiscalPeriod table',
        authors: [{name: 'MG'},{name: 'JD'},{name: 'TC'},{name: 'BE'}],
        comments: [
            {
                key: '30-1',
                thread: '/Components/ReconDatabase/Source/Recon/Setup/Stored Procedures/Populate_domain_FiscalPeriod.sql',
                user: 'Malini',
                comment: [`@Jacob Duenke Shouldn't the FiscalMonth here be 10? The FiscalMonth on May and June months below needs to be changed as well.`
                ]
            },
            {
                key: '30-2',
                thread: '/Components/ReconDatabase/Source/Recon/Setup/Stored Procedures/Populate_domain_FiscalPeriod.sql',
                user: 'Malini',
                comment: [`Also the April, May and June months of all the years below need correction.`]
            },
            {
                key: '3-3',
                thread: '/Components/ReconDatabase/Source/Recon/Setup/Stored Procedures/Populate_domain_FiscalPeriod.sql',
                user: 'Jacob',
                comment: [`Good catch! This must have happened when I was formatting to look like the old script.
                `]
            },
            {
                key: '30-4',
                thread: '/Components/ReconDatabase/Source/Recon/Setup/Stored Procedures/Populate_domain_FiscalPeriod.sql',
                user: 'Traber',
                comment: [`I won't block this PR for it, but I recommend using the VALUES syntax rather than a string of UNIONs.

                For example:
                
                SELECT *
                  FROM
                       (
                           VALUES
                               ('April, 2020', 2020, 1, '202010', '2020-04-01T00:00:00.000', '2020-04-30T23:59:59.999',
                                '2020-05-10T23:59:59.999'
                               ),
                               ('May, 2020', 2020, 1, '202011', '2020-05-01T00:00:00.000', '2020-05-31T23:59:59.999',
                                '2020-06-10T23:59:59.999'
                               )
                       ) AS x (Period, FiscalYear, FiscalMonth, SapPeriod, StartDate, EndDate, HardEndDate)
                `]
            },
            {
                key: '30-5',
                thread: '/Components/ReconDatabase/Source/Recon/Setup/Stored Procedures/Populate_domain_FiscalPeriod.sql',
                user: 'Benjamin',
                comment: [`Was wish-washy about your edit to remove the "match exactly" part and the old(FY 2016,17) values, since that was there to ensure a rogue (or ignorant) agent won't accidentally change the table and cause bad behavior.

                I'd prefer if you kept the "match exactly" part and also kept the old values as part but I won't block the PR for that.
                `]
            },
        ]
    },
    {
        id: 40,
        repo: 'FIN-STR-BSR-RI-ReconIntelligence',
        title: 'Update ConnectionStrings',
        authors: [{name: 'CH'},{name: 'JC'},{name: 'DJ'}],
        comments: [
            {
                key: '40-1',
                thread: '/DatabricksWorkspace/src/PythonLibraries/RISparkStreaming/RIDataFrame.py',
                user: 'Chris',
                comment: [`What you're doing here is very commendable but I wonder if you need to copy / paste all the code here? I think you just need to inherit from the class.`
                ]
            },
            {
                key: '40-2',
                thread: '/DatabricksWorkspace/src/PythonLibraries/RISparkStreaming/RIDataFrame.py',
                user: 'Chris',
                comment: [`https://www.tutorialgateway.org/method-overriding-in-python/ 

                You may just need to pass in pyspark.dataframe to the constructor of RIDataFrame.
                Not the constructor but the class definition`]
            },
            {
                key: '40-3',
                thread: '/DatabricksWorkspace/src/PythonLibraries/RISparkStreaming/RIDataFrame.py',
                user: 'Joseph',
                comment: [`Most method calls in the source code return a new instance of pyspark dataframe. So even though we're inheriting from that library, the first time a method is called RIDataFrame is no longer in scope. Maybe there is a way around that, but I couldn't find one
                `]
            },
            {
                key: '40-3',
                thread: '/DatabricksWorkspace/src/PythonLibraries/RISparkStreaming/RIDataFrame.py',
                user: 'Chris',
                comment: [`copy the methods but do a return RIDataFrame(super().method) 😃
                so, you are overriding the methods but still preserving the fact you dont have awareness of the source
                `]
            },
            {
                key: '40-3',
                thread: '/DatabricksWorkspace/src/PythonLibraries/RISparkStreaming/RIDataFrame.py',
                user: 'Denekew',
                comment: [`I think we need to put this and most of the classes in the RISparkStreaming folder into a common library that we can inherit/extend/override as needed in multiple places. Created a user story for this, https://microsoftit.visualstudio.com/OneITVSO/_workitems/edit/5956144.
                `]
            },
        ]
    },
];

export default prs;