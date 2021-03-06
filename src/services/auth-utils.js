import { UserAgentApplication, Logger, LogLevel } from "msal";

export const requiresInteraction = errorMessage => {
    if (!errorMessage || !errorMessage.length) {
        return false;
    }

    return (
        errorMessage.indexOf("consent_required") > -1 ||
        errorMessage.indexOf("interaction_required") > -1 ||
        errorMessage.indexOf("login_required") > -1
    );
};

export const fetchMsGraph = async (url, accessToken) => {
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    return response.json();
};

export const isIE = () => {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf("MSIE ") > -1;
    const msie11 = ua.indexOf("Trident/") > -1;

    // If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
    // const isEdge = ua.indexOf("Edge/") > -1;

    return msie || msie11;
};

export const GRAPH_SCOPES = {
    OPENID: "openid",
    PROFILE: "profile",
    USER_READ: "User.Read",
    MAIL_READ: "Mail.Read",
    DEV_OPS: "https://app.vssps.visualstudio.com/user_impersonation"
};

export const GRAPH_ENDPOINTS = {
    ME: "https://graph.microsoft.com/v1.0/me",
    MAIL: "https://graph.microsoft.com/v1.0/me/messages"
};

export const GRAPH_REQUESTS = {
    LOGIN: {
        scopes: [
            GRAPH_SCOPES.OPENID,
            GRAPH_SCOPES.PROFILE,
            GRAPH_SCOPES.USER_READ,
            //GRAPH_SCOPES.DEV_OPS
        ]
    },
    EMAIL: {
        scopes: [GRAPH_SCOPES.MAIL_READ]
    },
    DEVOPS: {
        scopes: [GRAPH_SCOPES.DEV_OPS]
    }
};

export const msalApp = new UserAgentApplication({
    auth: {
        clientId: "29b4f7f3-7ce9-421b-8d2b-51fb7dac5d63",//"245e9392-c666-4d51-8f8a-bfd9e55b2456",
        authority: "https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47",
        redirectUri: "http://localhost:3000/auth.html",
        validateAuthority: true,
        postLogoutRedirectUri: "http://localhost:3000",
        navigateToLoginRequestUrl: false
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: isIE()
    },
    system: {
        navigateFrameWait: 500,
        logger: new Logger((logLevel, message) => {
            console.log(message);
        }, {
            level: LogLevel.Verbose,
            piiLoggingEnabled: true
        }),
        telemetry: {
            applicationName: "react-sample-app",
            applicationVersion: "1.0.0",
            telemetryEmitter: (events) => {
                console.log('Telemetry Events:', events);
            }
        }
    }
});
