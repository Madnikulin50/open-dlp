import Complex_Condition from './complex_condition.js'

class And_Condition extends Complex_Condition
{
    constructor(in_Options)
    {
        super(in_Options);
    }    
    
    isSatisfied(in_Case)
    {
        for (let cond of this.condions)
        {
            if (!cond.isSatisfied(in_Case))
                return false;
        }
        return true;
    }

    executeOnDB()
    {
        
    }

};