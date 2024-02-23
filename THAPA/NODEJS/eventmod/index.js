const { ok } = require("assert");
const EventEmitter = require("events");

const event = new EventEmitter();

// event.on("sayMyName", () => {
//     console.log("Your Name is MR.")
// });

// event.on("sayMyName", () => {
//     console.log("Rituparno")
// });

// event.on("sayMyName", () => {
//     console.log("Das")
// });

event.on("checkpage", (sc, msg) => {
    console.log(`The status code is ${sc}, and the page is ${msg}`)

})

event.emit("checkpage", 200, "ok");

