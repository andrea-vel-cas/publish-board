const teams = [
    {
        id: 1,
        name: 'Recon Intelligence',
        channel: 'General',
        authors: [{name: 'BE'},{name: 'CH'},{name: 'TC'}],
        comments: [
            {
                key: '1-1',
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
                key: '1-2',
                thread: '6/18 3:04 PM',
                user: 'Benjamin',
                comment: [`Mentioning General for visibility or just awareness I guess`]
            },
            {
                key: '1-3',
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
                key: '1-4',
                thread: '6/18 3:04 PM',
                user: 'Benjamin',
                comment: [`Update: theres an option 4 that Traber implemented to inject a dependency accross resources that seems like it will work better than option 3, but it turns out workaround 3/4 only work in the region where the cosmosDb is actually deployed. Looking into seeing if we can deploy most resources to one resource group, but the cosmosDb instance to a distinct resource group so that the dependency chain doesn't throw exceptions.`]
            },
            {
                key: '1-5',
                thread: '6/18 3:04 PM',
                user: 'Benjamin',
                comment: [`The probelm is apparently that an inner function call will happen even when the resource won't be deployed and so that's throwing bad behavior because it's trying to list the keys of a cosmosDb that doesn't exist even though the whole resource is itself conditionally dependant on the cosmosDb existing. Known problem.`]
            },
            {
                key: '1-6',
                thread: '6/18 3:04 PM',
                user: 'Benjamin',
                comment: [`Furthermore, there was a fundemental misunderstanding of using dependOn with conditional resources. If you depend on a conditional resource, and the conditional resource will not be deployed, then  ARM removes the dependency and still lets your resource be deployed. Exactly what we don't want 😒. I originally made a workaround for it in the cosmos-only template without really thinking too deeply, but now it's explicit.`]
            },
            {
                key: '1-7',
                thread: '6/18 3:04 PM',
                user: 'Chris',
                comment: [`You could probably add the deploy x  if y in the yaml by escaping into a powershell and using an implicit condition `]
            },
            {
                key: '1-8',
                thread: '6/18 3:04 PM',
                user: 'Benjamin',
                comment: [`I think that approach sounds more difficult to follow than adding the explicit condition into the ARM template in the dependant resources which is the path I'm currently going down. I'd have to change the merge logic and how the mergeconfig gets interpreted.`]
            },
            {
                key: '1-9',
                thread: '6/18 3:04 PM',
                user: 'Traber',
                comment: [`There are several issues at play here.
                For the key vault access policy, you can one for the system-managed account after the function is deployed. I believe you can retrieve the system-managed identity using the reference() function. You can add new access policies without overwriting the existing ones. It's just the actual Key Vault resource deployment that resets them. However, the resource name to add a policy is not unique "name": "[concat(parameters('KeyVault_Name'), '/add')]",, so you can only have one in a template. You can get around this by using nested templates, which I have done with the ReconReporting ARM template deployment. See 'Components\ReconReporting\ARM\templates\Notifications-template.json' in ReconOps for an example of this.
                If Cosmos DB and the Azure function are part of the larger environment, you should include them in the merged ReconReporting templates. You can then inject the resource dependencies during the build. You can still have the source templates separate for easier maintenance.
                Since ARM removes the dependencies for conditionally-deployed resources, you need to include the same condition on the related resources. This may not be as pretty as the dependency chain, but is still pretty straightforward
                The if() ARM function should allow you to skip the resource call that errors if the target resource doesn't exist. You may need to include a dummy value like "none", rather than just blank for resource names. Otherwise, static template validation may fail for resources that aren't actually going to be deployment. I do this often for copied resources because ARM currently doesn't support a zero-sized array for copies (it's in the works).
                Pulling anything out into PowerShell should be a last resort when all else fails, since we then have to manage all error handling and idempotency.`]
            },
            {
                key: '1-10',
                thread: '6/18 3:04 PM',
                user: 'Chris',
                comment: [`We are software engineers, we can do anything!   Behold, the world!`]
            },
        ]
    },
];

export default teams;