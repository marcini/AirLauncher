var Application = function(){
    this.arguments = [];  
    this.connectionManager = null;
}

Application.prototype.init = function(){
  
  air.NativeApplication.nativeApplication.addEventListener(air.InvokeEvent.INVOKE, $.proxy(this.onInvoke, this));
  
}

Application.prototype.onInvoke = function(evt){
    if (evt.arguments.length){
        this.arguments = evt.arguments;
        this.connectionManager = new ConnectionManager();
        this.connectionManager.fetchDocument();
    }    
}