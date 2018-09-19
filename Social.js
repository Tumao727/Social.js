;(function(global) {

    // start a new object 
    const Social = (firstName, lastName, language) => {
        return new Social.init(firstName, lastName, language)
    }

    let supportedLangs = ['en', 'cn']

    // informal greetings
    let greetings = {
        en: 'Hi',
        cn: '你好',
    }

    // formal greetings
    let formalGreetings = {
        en: 'Greetings',
        cn: '幸会',
    }

    // informal farewell
    let farewells = {
        en: 'Goodbye',
        cn: '拜拜',
    }

    // formal farewell
    let formalFarewells = {
        en: 'Farewell',
        cn: '再见',
    }


    // prototype holds methods (to save memory space)
    Social.prototype = {
        fullName: () => {
            return `${this.firstName} ${this.lastName}`
        },

        // check whether it is a valid language
        validate: () => {
            if (!supportedLangs.includes(this.language)) {
                throw 'Invalid Language'
            }
        },

        greeting: () => {
            return `${greetings[this.language]} ${this.firstName} !`
        },

        formalGreeting: () => {
            return `${formalGreetings[this.language]}, ${this.fullName()}`
        },

        farewell: () => {
            return `${farewells[this.language]} ${this.firstName} !`
        },

        formalFarewell: () => {
            return `${formalFarewells[this.language]}, ${this.fullName()}`
        }
    }

    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Social.init = function(firstName, lastName, language) {
        this.firstName = firstName || ''
        this.lastName = lastName || ''
        this.language = language || 'cn'

        this.validate()
    }

    // trick borrowed from jQuery so we don't have to use the 'new ' keyword
    Social.init.prototype = Social.prototype

    // attach our Social to the global object, and provide a shorthand '$G' for ease our fingers
    Social.global = global.S$ = Social

})(window)