
class UserService{
    constructor(){
        this.userdetails = [{"user":"user1", "pass" : "user1"}, {"user":"user2", "pass" : "user2"}]
    }

    authenticateUser = (userObj) => {
        var user = this.userdetails.find(elem => elem.user === userObj.user);
        return user;
    }
  
}

export default new UserService();