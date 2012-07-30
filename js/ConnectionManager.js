var ConnectionManager = function(){
    
    this.startUrl = null;
    
    this.passParams = {
        switcher: null,
        id_procesu: null,
        id_common: null
    }
    
}

ConnectionManager.prototype.fetchDocument = function(startUrl){
    //TODO polaczenie z autoryzacja, jak z launchera
    //http://help.adobe.com/en_US/air/html/dev/WS5b3ccc516d4fbf351e63e3d118a9b8f6c0-7ffe.html
    
    //TODO zainicjalizowac DocumentHandler, wywolac otwarcie dokumentu i podlaczyc sie pod event modyfikacji
}

ConnectionManager.prototype.sendDocument = function(){
    
}