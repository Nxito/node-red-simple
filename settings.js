module.exports = {
    uiPort: process.env.PORT || 1880,
  
    mqttReconnectTime: 15000,
  
    serialReconnectTime: 15000,
    debugMaxLength: 1000,
  
    flowFilePretty: true,
  
    httpAdminRoot: "/admin",
  
    httpNodeRoot: "/app",
  
    httpStatic: "/data/static",
    adminAuth: {
      type: "credentials",
      users: [
        {
          username: "nxito",
          password:
            "$2a$12$TlqNTjJr/LBSfiS51k8JxOjvrVZCK/Q1gLGBhLpDxtZbfQZLJeDne",
          permissions: "*",
        },
      ],
    },
  
    httpsRefreshInterval: 12,
    
    disableEditor: false,
  
    functionGlobalContext: {},
  
    functionExternalModules: false,
  
    exportGlobalContextKeys: false,
    logging: {
      console: {
        level: "off",
        metrics: true,
        audit: true,
      },
    },
  
    externalModules: {},
  
    // Customising the editor
    editorTheme: {
      page: {
        title: "Nxito",
        css: __dirname + "/css/style.css",
      },
      header: {
        title: "Nxito",
      },
      projects: {
        enabled: true,
        workflow: {
          mode: "manual",
        },
      },
    },
  };
  