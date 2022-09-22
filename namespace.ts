export {}
//inter-related code rkha jata h like a controller 
namespace userUtils {

    export class Users {    //class k age export likhna zaruri h namespace main

        getName() {
            return "Aman Khanna"
        }

    }

}

let u1 = new userUtils.Users()
console.log(u1.getName());
