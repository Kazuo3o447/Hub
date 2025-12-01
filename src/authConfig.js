/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel } from "@azure/msal-browser";

/**
 * Konfiguration für die Microsoft Authentication Library (MSAL).
 * Enthält die IDs deiner Azure App Registration.
 */
export const msalConfig = {
    auth: {
        // Deine echte Client-ID (Anwendungs-ID)
        clientId: "1bcff9d8-08fd-4807-9483-eeeab557d612",
        
        // Deine echte Tenant-ID (Verzeichnis-ID) als Authority URL
        authority: "https://login.microsoftonline.com/7e77266e-8abb-4947-be1a-ce8f3bd5cb49",
        
        // Leitet nach dem Login auf die gleiche Seite zurück (z.B. localhost:3000)
        redirectUri: window.location.origin,
        
        // Optional: Nach dem Logout wohin?
        postLogoutRedirectUri: window.location.origin,
    },
    cache: {
        cacheLocation: "sessionStorage", // 'sessionStorage' ist sicherer als 'localStorage'
        storeAuthStateInCookie: false, // Setze auf true, falls es Probleme im IE11/Edge gibt
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        // console.info(message); // Einkommentieren für Debugging
                        return;
                    case LogLevel.Verbose:
                        // console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            }
        }
    }
};

/**
 * Scopes (Berechtigungen), die wir beim Login anfordern.
 * Diese müssen mit den "Delegierten Berechtigungen" im Azure Portal übereinstimmen.
 */
export const loginRequest = {
    scopes: [
        "User.Read",            // Profil lesen
        "Calendars.ReadWrite",  // Kalender bearbeiten (für Blocker)
        "Tasks.ReadWrite"       // Planner/To-Do bearbeiten
    ]
};

/**
 * Endpunkte für die Microsoft Graph API.
 */
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me", // Profil & Basisdaten
    graphCalendarEndpoint: "https://graph.microsoft.com/v1.0/me/calendar/events",
    graphTasksEndpoint: "https://graph.microsoft.com/v1.0/me/planner/tasks"
};
