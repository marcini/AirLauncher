var EventManager = function(){
    this.events = {};
}

EventManager.prototype.attach = function(eventName, handler)
{
    if (typeof handler != 'function')
    {
        throw 'Event handler is not a function';
    }    
    if (typeof events[eventName] == 'undefined')
    {
        events[eventName] = [];
    }
    events[eventName][events[eventName].length] = handler;
}

EventManager.prototype.trigger = function(eventName)
{
    if (events[eventName] && events[eventName].length){
        var ret = null;
        for (var i = 0; i < events[eventName].length; i++)
        {
            if (typeof events[eventName][i] == 'function')
            {
                ret = events[eventName][i]();
                if (ret === false)
                {
                    return false;
                }    
            }    
        }    
    }
}