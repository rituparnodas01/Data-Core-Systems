 const chalk = require("chalk");
 const validator = require("validator")

// import chalk from "chalk";

//  console.log(chalk.blue("Hello World"));
//  console.log(chalk.blue.underline("Hello World"));
//  console.log(chalk.blue.underline.inverse("Hello World"));
//  console.log(chalk.green.underline.inverse("Success"));
//  console.log(chalk.red.underline.inverse("false"));

const res = validator.isEmail("dasrituparno2002@gmail.com");
// console.log(res)
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));