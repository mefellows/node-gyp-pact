const addon = require("bindings")("module.node");

// Initialisation
addon.init();
console.log(`${addon.version()}`);

// Consumer test
const pact = addon.new_pact();
const interaction = addon.new_interaction(pact);
let res = addon.upon_receiving(interaction);
console.log(res);

// Provider verification (will fail, but should execute the function)
res = addon.verify_provider(`--file
pacts/test.json`);

// > 0 indicates a failure
console.log(res);
