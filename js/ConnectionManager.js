var ConnectionManager = function(){
    
    this.startUrl = null;
    
    this.passParams = {
        switcher: null,
        id_procesu: null,
        id_common: null
    }
    
}

ConnectionManager.prototype.getUrlRequest = function(url){
    var request = new air.URLRequest(url);
    request.userAgent = 'AirLauncher';
    request.manageCookies = true;
    request.method = air.URLRequestMethod.POST;
    
    var userSettings = new UserSettings();
    var post = new air.URLVariables();
    
    //TODO komunikat dla uzytkownika jesli musi najpierw ustawic te dane
    post.user_login = userSettings.getValue('user_login');
    post.user_password = userSettings.getValue('user_password');
    post.newlang = 'pol';
    request.data = post;
    
    return request;
}

ConnectionManager.prototype.fetchDocument = function(startUrl){
    
    var loader = new air.URLLoader();
    loader.addEventListener(air.Event.COMPLETE, function(event){
        //TODO
        air.trace('download complete');
        var loader = air.URLLoader(event.target);
        air.trace("completeHandler: " + loader.data);
        
        var tmpDir = air.File.createTempDirectory();
        //TODO delete tmpDir on app close
        
        var file = new air.File(tmpDir.nativePath+air.File.separator+'AirLauncher.doc');
        air.trace(file.nativePath);
        
        var fStream = new air.FileStream();
        fStream.open(file, air.FileMode.WRITE);
        fStream.writeUTF(loader.data+' dupa ');
        fStream.close();
        
        
        file.openWithDefaultApplication();
        
        //var destination = air.File.documentsDirectory;
        //destination = destination.resolvePath("AIR Test/Results/test1.txt");
        
        
    });
    
    var request = this.getUrlRequest(startUrl);
    
    try {
        loader.load(request);
    } catch (error) {
        air.trace("Unable to load requested document.");
    }
                
}

ConnectionManager.prototype.sendDocument = function(){
    
}