var Application = function(){
    this.arguments = [];  
    this.connectionManager = null;
    this.eventManager = null;
}

Application.prototype.init = function(){
  
  this.eventManager = new EventManager();
  
  air.NativeApplication.nativeApplication.addEventListener(air.InvokeEvent.INVOKE, $.proxy(this.onInvoke, this));
}

Application.prototype.onInvoke = function(evt){
    if (evt.arguments.length){
        this.arguments = evt.arguments;
        this.loadNewDoc(this.arguments[0].replace(/m7launcher/, 'http'));
    }    
}

Application.prototype.loadNewDoc = function(url){
    this.connectionManager = new ConnectionManager();
    this.connectionManager.fetchDocument(url);
        
    //TODO zainicjalizowac DocumentHandler, wywolac otwarcie dokumentu i podlaczyc sie pod event modyfikacji
}