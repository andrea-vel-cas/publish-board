const teams = [
    {
        id: 100,
        name: 'Recon Intelligence',
        channel: 'General',
        authors: [{name: 'BE'},{name: 'CH'},{name: 'TC'}],
        comments: [
            {
                key: '100-1',
                thread: '6/18 3:04 PM',
                user: 'Benjamin',
                comment: [`Discovered after meeting with Traber that what I'm trying to do in the template is both impossible and a highly requested feature ask in the product group. So that's not great. 
                Original plan was function app uses a user managed identity to access keyvault with secret reference, but the product group has only implemented accessing keyvault via system managed identity. Won't be implementing it too soon.
                Whenever a keyvault is deployed, the access policies get reset. There's no "deploy x if Y outside of the template exists" functionality so we can't make that deployment conditional. We can't add the system identity to keyvault access policy until the deployments get to the function app in question.
                This means best case if we follow that route is that we have a weird gap during infrastructure deployments where any cold startups would fail because the keyvault access is lost.                  
                
                So the alternate route I'm trying to follow is putting the secrets directly into the app settings, but that runs into a chicken/egg because I can't have a keyvault reference to a secret in the parameters if the secret itself is added by the template in question. We can pre-fill keyvault with an empty value but then that would lead to deployments where we have to deploy a second time in order for the functions to work. The problem is that you can only reference secrets by value in a parameters section which means either nested deployments(we really don't want that) or grabbing the empty pre-filled values. Being able to access secrets outside of the parameters section is highly requested and not yet implemented.`
                ]
            },
            {
                key: '100-2',
                thread: '6/18 3:04 PM',
                user: 'Benjamin',
                comment: [`Mentioning General for visibility or just awareness I guess`]
            },
            {
                key: '100-3',
                thread: '6/18 3:04 PM',
                user: 'Benjamin',
                comment: [`I have a few options i'm looking into with tradeoffs. Let me outline the tradeoff.
                Option 1) Every deployment has a window where startup would fail for the azure functions if called. Which won't necessarily happen.
                No workaround.
                Option 2) The first deployment to an environment will read a defaultValue(empty) secret from keyvault, but all subsequent deployments will have proper secrets.
                Workaround would be to deploy twice to each environment since the second time will always have the secrets.
                Alternate workaround is to just do the release twice and then have a note somewhere about this behavior in case we  ever restore an environment in disaster scenario.
                Option 3) The cosmosDb and the Azure function are in the same template, meaning the components are tied together.
                 
                I'm leaning towards option 3 but all three seem pretty viable.
                There might be a more friendly option 4 with dependency across templates and I'm looking to try and test if that would work`]
            },
            {
                key: '100-4',
                thread: '6/18 3:04 PM',
                user: 'Benjamin',
                comment: [`Update: theres an option 4 that Traber implemented to inject a dependency accross resources that seems like it will work better than option 3, but it turns out workaround 3/4 only work in the region where the cosmosDb is actually deployed. Looking into seeing if we can deploy most resources to one resource group, but the cosmosDb instance to a distinct resource group so that the dependency chain doesn't throw exceptions.`]
            },
            {
                key: '100-5',
                thread: '6/18 3:04 PM',
                user: 'Benjamin',
                comment: [`The probelm is apparently that an inner function call will happen even when the resource won't be deployed and so that's throwing bad behavior because it's trying to list the keys of a cosmosDb that doesn't exist even though the whole resource is itself conditionally dependant on the cosmosDb existing. Known problem.`]
            },
            {
                key: '100-6',
                thread: '6/18 3:04 PM',
                user: 'Benjamin',
                comment: [`Furthermore, there was a fundemental misunderstanding of using dependOn with conditional resources. If you depend on a conditional resource, and the conditional resource will not be deployed, then  ARM removes the dependency and still lets your resource be deployed. Exactly what we don't want 😒. I originally made a workaround for it in the cosmos-only template without really thinking too deeply, but now it's explicit.`]
            },
            {
                key: '100-7',
                thread: '6/18 3:04 PM',
                user: 'Chris',
                comment: [`You could probably add the deploy x  if y in the yaml by escaping into a powershell and using an implicit condition `]
            },
            {
                key: '100-8',
                thread: '6/18 3:04 PM',
                user: 'Benjamin',
                comment: [`I think that approach sounds more difficult to follow than adding the explicit condition into the ARM template in the dependant resources which is the path I'm currently going down. I'd have to change the merge logic and how the mergeconfig gets interpreted.`]
            },
            {
                key: '100-9',
                thread: '6/18 3:04 PM',
                user: 'Traber',
                comment: [`There are several issues at play here.
                For the key vault access policy, you can one for the system-managed account after the function is deployed. I believe you can retrieve the system-managed identity using the reference() function. You can add new access policies without overwriting the existing ones. It's just the actual Key Vault resource deployment that resets them. However, the resource name to add a policy is not unique "name": "[concat(parameters('KeyVault_Name'), '/add')]",, so you can only have one in a template. You can get around this by using nested templates, which I have done with the ReconReporting ARM template deployment. See 'Components\\ReconReporting\\ARM\\templates\\Notifications-template.json' in ReconOps for an example of this.
                If Cosmos DB and the Azure function are part of the larger environment, you should include them in the merged ReconReporting templates. You can then inject the resource dependencies during the build. You can still have the source templates separate for easier maintenance.
                Since ARM removes the dependencies for conditionally-deployed resources, you need to include the same condition on the related resources. This may not be as pretty as the dependency chain, but is still pretty straightforward
                The if() ARM function should allow you to skip the resource call that errors if the target resource doesn't exist. You may need to include a dummy value like "none", rather than just blank for resource names. Otherwise, static template validation may fail for resources that aren't actually going to be deployment. I do this often for copied resources because ARM currently doesn't support a zero-sized array for copies (it's in the works).
                Pulling anything out into PowerShell should be a last resort when all else fails, since we then have to manage all error handling and idempotency.`]
            },
            {
                key: '100-10',
                thread: '6/18 3:04 PM',
                user: 'Chris',
                comment: [`We are software engineers, we can do anything!   Behold, the world!`]
            },
        ]
    },
    {
        id: 200,
        name: 'Recon Intelligence',
        channel: 'General',
        authors: [{name: 'JD'},{name: 'MS'},{name: 'TM'},{name: 'AV'},{name: 'BE'}],
        comments: [
            {
                key: '200-1',
                thread: '6/16 10:50 AM',
                user: 'Jacob',
                comment: [`Watching my machine's Performance Monitor and that Teams videochat was holding 30% CPU resources and 80-90% GPU...maybe this is why Zoom got so popular.`
                ]
            },
            {
                key: '200-2',
                thread: '6/16 10:50 AM',
                user: 'Mary',
                comment: [`As long as you're okay with the security flaws `]
            },
            {
                key: '200-3',
                thread: '6/16 10:50 AM',
                user: 'Tony',
                comment: [`I'm pretty sure they're by design`]
            },
            {
                key: '200-4',
                thread: '6/16 10:50 AM',
                user: 'Mary',
                comment: [`It's not a bug its a feature!`]
            },
            {
                key: '200-5',
                thread: '6/16 10:50 AM',
                user: 'Jacob',
                comment: [`As long as I can do ANYTHING while Teams is open.
                Considering using Teams on my phone exclusively.`]
            },
            {
                key: '200-6',
                thread: '6/16 10:50 AM',
                user: 'Mary',
                comment: [`It helps to lower your expectations.`]
            },
            {
                key: '200-7',
                thread: '6/16 10:50 AM',
                user: 'Andrea',
                comment: [`My internet always collapse with scrum meeting, I think is because a lot of people is showing video.`]
            },
            {
                key: '200-8',
                thread: '6/16 10:50 AM',
                user: 'Jacob',
                comment: [`But I need your faces to get through the day!`]
            },
            {
                key: '200-9',
                thread: '6/16 10:50 AM',
                user: 'Benjamin',
                comment: [`zoom is also more lightweight in setup: you can just make a call, anyone can. For free. Teams isn't so simple`]
            },
        ]
    },
    {
        id: 300,
        name: 'Recon Intelligence',
        channel: 'RI Sprint Planning',
        authors: [{name: 'DJ'},{name: 'JD'},{name: 'KB'}],
        comments: [
            {
                key: '300-1',
                thread: '6/25 09:00 AM',
                user: 'Denekew',
                comment: [`This keynote is a much awaited Databricks keynote, and starts now, 9am ...

                https://sparkaisummit.com/my-agenda/`
                ]
            },
            {
                key: '300-2',
                thread: '6/25 09:00 AM',
                user: 'Denekew',
                comment: [`https://sparkaisummit.com/session-virtual/?v26dd132ae80017cdaf764437c30ebe6f10c1b1eeaab01165e44366654b368dfaeab6baf7e386a642ecb238989334530e=A30896577415A05C2C06B8087CC94C5DDE83387CE0C979E2532AFCAE706D0EE594541DEE350B6953D2FAE61AC2BB4FF7&fromPersonalAgenda`]
            },
            {
                key: '300-3',
                thread: '6/25 09:00 AM',
                user: 'Jacob',
                comment: [`It is.`]
            },
            {
                key: '300-4',
                thread: '6/25 09:00 AM',
                user: 'Ken',
                comment: [`MLFlow and integrated CI/CD`]
            },
            {
                key: '300-5',
                thread: '6/25 09:00 AM',
                user: 'Jacob',
                comment: [`I've been in and out cause meetings. 😭`]
            },
            {
                key: '300-6',
                thread: '6/25 09:00 AM',
                user: 'Ken',
                comment: [`https://mlflow.org/`]
            },
            {
                key: '300-7',
                thread: '6/25 09:00 AM',
                user: 'Ken',
                comment: [`A big thing I'm getting out of the conference is performance improvements if we upgrade to Spark 3. Not sure if there are breaking changes, but I think we should do that beginning of next fiscal year. Maybe a spike to evaluate upgrade path.`]
            },
            {
                key: '300-8',
                thread: '6/25 09:00 AM',
                user: 'Jacob',
                comment: [`Spark 3 broke our tests, so gotta figure that out.`]
            },
        ]
    },
    {
        id: 400,
        name: 'Recon Intelligence',
        channel: 'Frontend and UI Technologies',
        authors: [{name: 'MS'},{name: 'AV'}],
        comments: [
            {
                key: '400-1',
                thread: '6/22 10:20 AM',
                user: 'Mary',
                comment: [`I don't know if you all have read that Office UI Fabric is now call Fluent UI. Here's the annoucment. https://developer.microsoft.com/en-us/office/blogs/ui-fabric-is-evolving-into-fluent-ui/`
                ]
            },
            {
                key: '400-2',
                thread: '6/22 10:20 AM',
                user: 'Andrea',
                comment: [`I was just looking for this one! Thanks for sharing `]
            },
        ]
    },
];

export default teams;