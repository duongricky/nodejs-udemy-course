const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Title: ', argv.title)
        console.log('Body: ', argv.body)
    },
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: () => {
        console.log('List notes')
    },
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
        console.log('Read a note')
    },
})
yargs.parse()
// console.log(yargs.argv)