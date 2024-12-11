const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1500,
  viewportHeight: 900,
  chromeWebSecurity: false,
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
   
    },
  },
 
  blockHosts: ["*.googlesyndication.com"]
});


