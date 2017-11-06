#!/usr/bin/env node

const arcli = require('../lib/arcli')

arcli.init.setup(process, {
    fancy: true
});

const { Commander, Consoler, Spinner } = arcli;

Commander
    .command('ping')
    .description('Sends a ping and prints pong')
    .action(() => {
        Consoler.tell("tell")
        Consoler.success("success")
        Consoler.fail("fail")
        Consoler.message("message")
        Consoler.plain("plain")
        Spinner.start("Drinking 10 beers ...")
        setTimeout(() => {
            Spinner.success("I'm drunk!");
        }, 1000);
    });

arcli.run()
