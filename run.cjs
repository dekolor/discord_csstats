var child = require("child_process").exec("node browser.js");
child.stdout.pipe(process.stdout);
child.on("exit", function () {
  require("child_process").exec("node discord.js");
});
