var jsdb = require("jsdoc");

class Options
{

    load(path)
    {

    };

    get webServer()
    {
        return { portnum:1212 }
    }

    get audit()
    {
        return {};
    }

    get agents()
    {
        return {};
    }
};

exports = module.exports = new Options();