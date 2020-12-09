let args = {}, input = [];
let i, argv = process.argv.slice(2);

while (i = argv.shift()) {
    if (i[0] === "-")
        if (i[1] === "-")
            args[i.slice(2)] = argv.shift();
        else
            args[i.slice(1)] = true;
    else
        input.push(i);
}

module.exports = function(help) {
    if (Object.keys(args).includes("help")) {
        console.log(help.trim());
        process.exit();
    }

    const enableColors = !args["no-colors"];

    return {
        args,
        input,
        colors: {
            "reset": enableColors ? "\x1b[0m" : "",
            "bold": enableColors ? "\x1b[1m" : "",
            "red": enableColors ? "\x1b[31m" : "",
            "yellow": enableColors ? "\x1b[33m" : "",
            "cyan": enableColors ? "\x1b[34m" : ""
        },
        appendSlash: (input) => input.endsWith("/") ? input : input + "/"
    };
}
