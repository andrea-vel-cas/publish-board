const emails = [
    {
        id: 1,
        subject: 'Fiscal Year Role',
        authors: [{name: 'JJ'},{name: 'CH'},{name: 'BE'},{name: 'TC'},{name: 'JD'}],
        comments: [
            {
                key: '1-1',
                user: 'Jeff',
                comment: [`Hi Chris,
                I’m not sure if RI requires any sort of meta data updates when the fiscal year changes. Last year JEM had an outage on July 1st because the new fiscal year wasn’t configured. Can you review and see if there is any configuration required for RI? 
                `
                ]
            },
            {
                key: '1-2',
                user: 'Chris',
                comment: [`Team,
                Do we get this for free from our SQL table that grabs this for us?
                `]
            },
            {
                key: '1-3',
                user: 'Ben',
                comment: [`This unfortunately requires manual action. We have a post-deployment script in sql for populating the rows, and so we need that to run with updated rows included for FY 2021. 
                I know there were discussions about a service that just published fiscal period info that we/JEM could consume, I don’t know if that ever got any traction. 
                `]
            },
            {
                key: '1-4',
                user: 'Traber',
                comment: [`Is this not something that we can prepopulate for future periods?`]
            },
            {
                key: '1-5',
                user: 'Ben',
                comment: [`We absolutely can prepopulate pretty far out with high accuracy. 
                There’s nothing stopping us from populating all the way out to 2099(as an example) right now. 
                `]
            },
            {
                key: '1-6',
                user: 'Ben',
                comment: [`Hey Team,
                We never got around to this. 
                We need to either include this in the release today or do an out of cycle release later to ensure it gets done before July 1st
                
                When doing this we can just fill out multiple years at once and save us headache(although we’ll probably be off SQL completely by 2022).
                
                Marking this as high priority so it gets on our radar.                
                `]
            },
            {
                key: '1-7',
                user: 'Jacob',
                comment: [`There was talk last night about roling back some DB commits for today’s release, so…I’m inexperienced when it comes to that sort of thing.
                Anyway, here’s a PR to bring us up to speed for two more years when we’ll (hopefully) not need it anymore.
                
                Pull Request 589963: Merge range(2020, 2022) to FiscalPeriod table                
                `]
            },
            {
                key: '1-8',
                user: 'Jacob',
                comment: [`Hello again,
                I’ve pushed updates to this PR to make everyone happy. Please review again!                
                `]
            },
        ]
    },
    {
        id: 2,
        subject: 'Found More Cool ARM Stuff',
        authors: [{name: 'JD'},{name: 'MS'}],
        comments: [
            {
                key: '2-1',
                user: 'Jacob',
                comment: [` While doing the usual nerd stuff that I do, came across this:

                ARM template resource that is a PowerShell step! Yes, you can (and we do) have a powershell step in the YAML, but it can be done natively in the ARM.
                Quick benefit off the top is the way we insert connection string values in KeyVault after deploying a relevant resource.
                Traber has figured out some effective, but weird looking PS scripts to do this, but I’m betting it’d be easier in ARM with direct access to the reference functions.
                https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/deployment-script-template?tabs=PowerShell
                
                ARM template test step in ADO. This is a step that does a few of the PowerShell ARM validations you can do manually. Probably not ground breaking stuff for us, but a good way to fail fast on bad ARMs or hard coded secrets.
                https://marketplace.visualstudio.com/items?itemName=Sam-Cogan.ARMTTKExtension                
                `
                ]
            },
            {
                key: '2-2',
                user: 'Mary',
                comment: [`Oh I’m totally playing with that ARM template test step in ADO. Thank you for sharing @Jacob!
                `]
            },
        ]
    },
    {
        id: 3,
        subject: 'Inclusion during meetings',
        authors: [{name: 'AV'},{name: 'CH'},{name: 'TC'}],
        comments: [
            {
                key: '3-1',
                user: 'Andrea',
                comment: [` Hello team,

                I was curious about the difficulty of writing some “extension” for Microsoft Teams, turns out it’s pretty easy and there are a ton of them already. I found this one very interesting: https://appsource.microsoft.com/en-us/product/office/WA200001511?tab=Overview It’s called Speak Now and enable some of the abilities we have discussed for inclusion in our meetings, like raise hands and have an order to speak about a topic, current speaker enables who can speak next, and reply to the current speaker. 
                
                I’m not sure if we can add this extension safely in our team/chats or if there’s a process to do so for intern tools. Just wanted to share the possibility in case we want to give it a try.                             
                `
                ]
            },
            {
                key: '3-2',
                user: 'Chris',
                comment: [`I think this is a wonderful idea!  

                Anyone know about Andrea’s question?                  
                `]
            },
            {
                key: '3-3',
                user: 'Traber',
                comment: [`That looks pretty cool. Great find Andrea!

                Yes, there is a process to go through for third party tools. It's always a good idea to double-check whether a certain application or service is OK to use internally.
                
                The Third Party Software Licensing Service (SLS) site has everything you need and a link to the request for software approval.
                
                @Andrea, can you create the request for this? It would be interesting to try it out for a while if it seems promising.                             
                `]
            },
            {
                key: '3-4',
                user: 'Andrea',
                comment: [`I’m tracking the process to see if we can use it! Thanks Traber for the guidance. I’ll let you all know any updates 😊
                `]
            },
            {
                key: '3-5',
                user: 'Andrea',
                comment: [`Hello team,
                Just wanted to let everyone know that the plugin has been reviewed and approved, we can “officially” give it a try and see if it works for our needs. If you already tried it and have some feedback, please share it.                
                `]
            },
        ]
    },
    {
        id: 4,
        subject: 'Upcoming Spark + AI Summit - Everyone encouraged to attend at least one event',
        authors: [{name: 'CH'},{name: 'KB'}],
        comments: [
            {
                key: '4-1',
                user: 'Chris',
                comment: [` Team,

                The upcoming Spark + AI Summit contains some of the vey best training we could hope to get.  While Denekew and Malini have opportunities to attend trainings in the first couple days, any of us can attend sessions within the conference between Wednesday and Friday (6/24-6/26).  
                
                While the list below is not an exhaustive list, believe me they had way more sessions, I did go through the list and identify interesting ones that have immediate impact to what we’re doing in Databricks, may touch at some point, or have value in the discussion.
                
                I would strongly encourage everyone to attend a handful of these sessions.  Many are just 30 minutes.
                
                Afterward, I’ll setup a retrospective where @Denekew Jembere and @Malini Goppannan Ravi can share what awesome knowledge they learned from the first two days and the rest of us share insights as well from sessions we attended.
                
                + Included Jeff’s other directs for discussion whether a retrospective across teams might have value since we have people from each team attending.
                
                See Agenda and Register Here
                https://databricks.com/sparkaisummit/north-america-2020/agenda                                                                                                                                                                              
                
                https://databricks.com/session_na20/pandas-udf-and-python-type-hint-in-apache-spark-3-0
                Consequently, this person providing this talk is also the one whose taking the first look at my Spark PR.
                	Wonder if I should had attended this first lol…https://databricks.com/session_na20/getting-started-contributing-to-apache-spark-from-pr-cr-jira-and-beyond
                
                https://databricks.com/session_na20/accelerating-spark-sql-workloads-to-50x-performance-with-apache-arrow-based-fpga-accelerators
                https://databricks.com/session_na20/simplify-cdc-pipeline-with-spark-streaming-sql-and-delta-lake
                https://databricks.com/session_na20/preventing-abuse-using-unsupervised-learning
                https://databricks.com/session_na20/how-adobe-does-2-million-records-per-second-using-apache-spark
                https://databricks.com/session_na20/ai-assisted-feature-selection-for-big-data-modeling  @Joanna Garrett
                https://databricks.com/session_na20/accelerating-data-processing-in-spark-sql-with-pandas-udfs
                https://databricks.com/session_na20/zipline-a-declarative-feature-engineering-framework
                https://databricks.com/session_na20/hyperspace-an-indexing-subsystem-for-apache-spark (Microsoft Speaker)
                https://databricks.com/session_na20/building-data-quality-audit-framework-using-delta-lake-at-cerner
                https://databricks.com/session_na20/an-approach-to-data-quality-for-netflix-personalization-systems
                https://databricks.com/session_na20/tracing-the-breadcrumbs-apache-spark-workload-diagnostics
                https://databricks.com/session_na20/operationalize-apache-spark-analytics
                https://databricks.com/session_na20/data-microservices-in-apache-spark-using-apache-arrow-flight
                https://databricks.com/session_na20/performant-streaming-in-production-preventing-common-pitfalls-when-productionizing-streaming-jobs
                https://databricks.com/session_na20/deep-dive-into-the-new-features-of-apache-spark-3-0
                https://databricks.com/session_na20/ai-disruption-of-quantitative-finance-from-forecasting-to-probability-density-estimation-to-generative-models-and-to-optimization-with-reinforcement-learning
                https://databricks.com/session_na20/parallelization-of-structured-streaming-jobs-using-delta-lake
                https://databricks.com/session_na20/using-machine-learning-algorithms-to-construct-all-the-components-of-a-knowledge-graph
                https://databricks.com/session_na20/best-practices-for-engineering-production-ready-software-with-apache-spark
                https://databricks.com/session_na20/fine-tuning-and-enhancing-performance-of-apache-spark-jobs
                https://databricks.com/session_na20/building-the-petcare-data-platform-using-delta-lake-and-kyte-our-spark-etl-pipeline
                https://databricks.com/session_na20/on-improving-broadcast-joins-in-apache-spark-sql
                https://databricks.com/session_na20/delta-from-a-data-engineers-perspective
                https://databricks.com/session_na20/sputnik-airbnbs-apache-spark-framework-for-data-engineering
                https://databricks.com/session_na20/sql-performance-improvements-at-a-glance-in-apache-spark-3-0
                https://databricks.com/session_na20/bucketing-2-0-improve-spark-sql-performance-by-removing-shuffle
                https://databricks.com/session_na20/koalas-pandas-on-apache-spark
                https://databricks.com/session_na20/automated-testing-for-protecting-data-pipelines-from-undocumented-assumptions
                https://databricks.com/session_na20/best-practices-for-building-robust-data-platform-with-apache-spark-and-delta
                https://databricks.com/session_na20/machine-learning-data-lineage-with-mlflow-and-delta-lake @Malini Goppannan Ravi
                https://databricks.com/session_na20/patterns-and-operational-insights-from-the-first-users-of-delta-lake
                https://databricks.com/session_na20/apache-pulsar-the-next-generation-messaging-and-queuing-system
                https://databricks.com/session_na20/scoring-at-scale-generating-follow-recommendations-for-over-690-million-linkedin-members
                https://databricks.com/session_na20/building-a-streaming-microservice-architecture-with-apache-spark-structured-streaming-and-friends
                https://databricks.com/session_na20/ray-enterprise-grade-distributed-python
                             
                `
                ]
            },
            {
                key: '4-2',
                user: 'Chris',
                comment: [`Just a couple quick mentions here, I should have mentioned Ken will also be attending and maybe he’ll have some awesome take-aways for us as well.  Since this is happening during next week’s hack week, it seems like it falls within a great time window for us!
                `]
            },
            {
                key: '4-3',
                user: 'Ken',
                comment: [`Thanks Chris. I wanted to send out a couple tips that came in my registration, not sure if it applies to all, but good to be prepared:

                1.	The class tomorrow starts at 9 AM EST. This is 3 hour time difference so that means 6 AM our time (PST).
                2.	They sent info on how to connect to Zoom. For me, this failed first for attempting to use Edge, I had to use Chrome, then it failed on the audio test after the Zoom install, so I had to reboot. Best to do this before the event otherwise you could easily lose the first 10 minutes of the class dealing with logistics issues.                
                `]
            },
        ]
    },
];

export default emails;