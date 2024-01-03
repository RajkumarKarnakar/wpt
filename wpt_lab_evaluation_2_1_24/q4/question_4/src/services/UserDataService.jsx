
class UserDataService{
    constructor(){
        this.userlist = [{'fname':'roshan', 'lname':'sharma', 'address':'shantacruz', pin:'440012'}, {'fname':'mukesh', 'lname':'gohane', 'address':'warli road', pin:'440010'}];
    }

    getAllUserList(){
        return this.userlist;
    }

    insertUser(userObj){
        this.userlist.push(userObj);
        console.log(this.userlist);
    }
}


export default new UserDataService;