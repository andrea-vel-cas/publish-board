import React from 'react';
import {
    msalApp,
    requiresInteraction,
    fetchMsGraph,
    isIE,
    GRAPH_ENDPOINTS,
    GRAPH_SCOPES,
    GRAPH_REQUESTS
} from './auth-utils';
import { WindowUtils } from "msal";

// If you support IE, our recommendation is that you sign-in using Redirect APIs
const useRedirectFlow = isIE();
// const useRedirectFlow = true;

/*export default C =>
    class AuthProvider extends Component {
        constructor(props) {
            super(props);

            this.state = {
                account: null,
                error: null,
                emailMessages: null,
                graphProfile: null
            };
        }
*/
        export function acquireToken(request, redirect) {
            return msalApp.acquireTokenSilent(request).catch(error => {
                // Call acquireTokenPopup (popup window) in case of acquireTokenSilent failure
                // due to consent or interaction required ONLY
                if (requiresInteraction(error.errorCode)) {
                    return redirect
                        ? msalApp.acquireTokenRedirect({
                            ...request,
                            redirectUri: "http://localhost:3000"
                        })
                        : msalApp.acquireTokenPopup(request);
                } else {
                    console.error('Non-interactive error:', error)
                }
            });
        }

        export async function onSignIn(redirect) {
            if (redirect) {
                return msalApp.loginRedirect({
                    ...GRAPH_REQUESTS.LOGIN,
                    redirectUri: "http://localhost:3000"
                });
            }

            const loginResponse = //(async () => {
                await msalApp
                .loginPopup(GRAPH_REQUESTS.LOGIN)
                .catch(error => {
                    /*this.setState({
                        error: error.message
                    });*/
                    console.log(error.message);
                });
            //})();

            if (loginResponse) {
                /*this.setState({
                    account: loginResponse.account,
                    error: null
                });*/
                console.log("ACCOUNT --- >" + loginResponse.account);

                const tokenResponse = //(async () => {
                    await acquireToken(
                        GRAPH_REQUESTS.LOGIN
                    ).catch(error => {
                        /*this.setState({
                            error: error.message
                        });*/
                        console.log(error.message);
                    });
                //})();

                if (tokenResponse) {
                    console.log(tokenResponse.scopes);
                    
                    const graphProfile = //(async () => {
                        await fetchMsGraph(
                            GRAPH_ENDPOINTS.ME,
                            tokenResponse.accessToken
                        ).catch(() => {
                            /*this.setState({
                                error: "Unable to fetch Graph profile."
                            });*/
                            console.log("Can't fetch graph");
                        });
                    //})();

                    if (graphProfile) {
                        /*this.setState({
                            graphProfile
                        });*/
                        console.log(graphProfile);
                    }

                    if (tokenResponse.scopes.indexOf(GRAPH_SCOPES.MAIL_READ) > 0) {
                        return await readMail(tokenResponse.accessToken);
                    }
                }
            }
        }

        export function onSignOut() {
            msalApp.logout();
        }

        export async function onRequestEmailToken() {
            const tokenResponse = //(async () => {
                await acquireToken(
                    GRAPH_REQUESTS.EMAIL,
                    useRedirectFlow
                ).catch(e => {
                    /*this.setState({
                        error: "Unable to acquire access token for reading email."
                    });*/
                    console.log("No token for reading email");
                });
            //})();          

            if (tokenResponse) {
                return await readMail(tokenResponse.accessToken);
            }
        }

        export async function readMail(accessToken) {
            const emailMessages = //(async () => {
                await fetchMsGraph(
                    GRAPH_ENDPOINTS.MAIL,
                    accessToken
                ).catch(() => {
                    /*this.setState({
                        error: "Unable to fetch email messages."
                    });*/
                    console.log("Can't fetch email messages");
                });
            //})();

            if (emailMessages) {
                /*this.setState({
                    emailMessages,
                    error: null
                });*/
                console.log(emailMessages);
            }
        }

        export async function componentDidMount() {
            msalApp.handleRedirectCallback(error => {
                if (error) {
                    const errorMessage = error.errorMessage ? error.errorMessage : "Unable to acquire access token.";
                    // setState works as long as navigateToLoginRequestUrl: false
                    /*this.setState({
                        error: errorMessage
                    });*/
                    console.log(errorMessage);
                }
            });

            const account = msalApp.getAccount();

            /*this.setState({
                account
            });*/
            console.log(account);

            if (account && !WindowUtils.isInIframe()) {
                const tokenResponse = //(async () => {
                    await acquireToken(
                        GRAPH_REQUESTS.LOGIN,
                        useRedirectFlow
                    );
                //})();          

                if (tokenResponse) {
                    console.log(tokenResponse.scopes);

                    const graphProfile = //(async () => {
                        await fetchMsGraph(
                            GRAPH_ENDPOINTS.ME,
                            tokenResponse.accessToken
                        ).catch(() => {
                            /*this.setState({
                                error: "Unable to fetch Graph profile."
                            });*/
                            console.log("Can't fetch graph profile");
                        });
                    //})();

                    if (graphProfile) {
                        /*this.setState({
                            graphProfile
                        });*/
                        console.log(graphProfile);
                    }

                    if (tokenResponse.scopes.indexOf(GRAPH_SCOPES.MAIL_READ) > 0) {
                        return await readMail(tokenResponse.accessToken);
                    }
                }
            }
        }

        /*render() {
            return (
                <C
                    {...this.props}
                    account={this.state.account}
                    emailMessages={this.state.emailMessages}
                    error={this.state.error}
                    graphProfile={this.state.graphProfile}
                    onSignIn={() => this.onSignIn(useRedirectFlow)}
                    onSignOut={() => this.onSignOut()}
                    onRequestEmailToken={() => this.onRequestEmailToken()}
                />
            );
        }
    };
*/
