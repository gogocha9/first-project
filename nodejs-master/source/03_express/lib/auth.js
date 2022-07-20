module.exports = {
    isOwner:function(request, response) {
        if(request.session.is_logined) {
            return true;
        } else {
            return false;
        }
    },
    statusUI:function(request, response) {
        var authStatusUI = '<a href="/auth/login">login</a>';
        if(this.isOwner(request, response)) {
            authStatusUI = `${request.session.nickname} | <a href="/auth/logout">logout</a>`;
        }
        return authStatusUI;
    }
}

// let me = { 
//     name: "Ashutosh Verma", 
//     thisInArrow:() => { 
//     console.log("My name is " + this.name); no 'this' binding here 
//     }, 
//     thisInRegular(){ 
//     console.log("My name is " + this.name); 'this' binding works here 
//     } 
//    };
//    me.thisInArrow(); 
//    me.thisInRegular();