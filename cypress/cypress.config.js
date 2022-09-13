const { defineConfig } = require("cypress");

module.exports = defineConfig({
  edgeWebSecurity: false,
  e2e: {
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // and load any plugins that require the Node environment
      /*
      on("task", {
        print(s) {
          console.log(s);
          return null;
        },
      });*/
    },
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
