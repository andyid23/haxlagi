import config from "./rollup.config.js";
console.log(config.external("/app/applet/custom/src/explode-quiz.js"));
console.log(config.external("lit"));
console.log(config.external("./explode-quiz.js"));
