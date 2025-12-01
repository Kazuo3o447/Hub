// src/authConfig.js
export const msalConfig = {
  auth: {
    // 1. Anwendungs-ID (Client) aus dem Azure Portal
    clientId: "1bcff9d8-08fd-4807-9483-eeeab557d612", 
    
    // 2. Verzeichnis-ID (Mandant) aus dem Azure Portal
    // Die Basis-URL https://login.microsoftonline.com/ bleibt bestehen
    authority: "https://login.microsoftonline.com/7e77266e-8abb-4947-be1a-ce8f3bd5cb49", 
    
    // Dies sollte die URL sein, auf die Entra ID nach dem Login zurückleitet
    // Lokal ist das meist http://localhost:3000 oder 5173
    redirectUri: window.location.origin, 
  },
  cache: {
    cacheLocation: "sessionStorage", 
    storeAuthStateInCookie: false,
  }
};

// Das sind die Rechte, die wir vom Nutzer wollen (müssen auch im Azure Portal gesetzt werden!)
export const loginRequest = {
  scopes: ["User.Read", "Calendars.ReadWrite", "Tasks.ReadWrite"]
};

// Hilfsfunktion für den Zugriff auf den Graph (Kalender/Planner)
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
