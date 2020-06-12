const readline = require('readline-sync')

const userInput = (content) => {
    content.searchTerm = {
        "articleName": askAndReturnSearchTerm(),
        "lang": "pt"
    }
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }
    
    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectPrefixIndex = readline.keyInSelect(prefixes)
        const selectPrefixText = prefixes[selectPrefixIndex]
    
        return selectPrefixText
    }
}

module.exports = userInput

