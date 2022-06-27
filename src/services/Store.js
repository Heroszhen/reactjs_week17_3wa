export default class Store{
    
    //localstorage
    setStorage(key,value){
        localStorage.setItem(key,value);
    }

    getStorage(key){
        return localStorage.getItem(key);
    }

    removeStorage(key){
        localStorage.removeItem(key);
    }
    
}