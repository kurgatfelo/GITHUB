export class User {

    constructor(
        public login : string,
       
        public avatar_url: string, 
        public bio : string, 
        public location : string,
        public following : number,
        public followers: number,
        public public_repos : number,
        public forks_count : number,
        public completeDate: string
    
    )
        {}
}
