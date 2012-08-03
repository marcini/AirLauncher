var UserSettings = function(){
    
}

UserSettings.prototype.getValue = function(name){
    var storedValue = air.EncryptedLocalStore.getItem(name);
    if (storedValue !== null){
        return storedValue.readUTFBytes(storedValue.length);
    }
    else{
        return null;
    }
}

UserSettings.prototype.setValue = function(name, value){
    var bytes = new air.ByteArray();
    bytes.writeUTFBytes(value);
    air.EncryptedLocalStore.setItem(name, bytes);
}

UserSettings.prototype.clearValue = function(name){
    air.EncryptedLocalStore.removeItem(name);
}

UserSettings.prototype.clearAll = function(){
    air.EncryptedLocalStore.reset();
}