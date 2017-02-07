class User {
    constructor(id, email, name){
        this.id = id;
        this.email = email;
        this.name = name;
    }

    get acceptedEvents () {
        return ["EventOne", "EventTwo"];
    }
}