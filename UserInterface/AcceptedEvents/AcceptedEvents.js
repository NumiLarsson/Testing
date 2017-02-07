class AcceptedEvents {
    constructor(user) {
        this.user = user;
        this.events = [];
    }

    UpdateEvents() {
        this.events = this.user.acceptedEvents;
    }

    Render(){
        var text = "";
        for(var i = 0; i < this.events.length; i++){
            text = text + "<li>" + this.events[i] + "</li>";
        }
        return (
            "<div className=\"AcceptedEvents\">" +
                "<ul>" +
                 text +
                "</ul>" + 
            "</div>"
        );
    }
}