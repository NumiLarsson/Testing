class UserInterface {
    constructor(user){
        this.user = user;
        this.accEvents = new AcceptedEvents(this.user)
    }

    render(){
        return(
            "<div className=\"UserInterface\">" +
                this.accEvents.Render()
            + "</div>"
        );
    }

    
    auxrender(){
        this.accEvents.UpdateEvents();
        var text = this.render();
        console.log(text);
        document.getElementById("iframeid").innerHTML= text;
    }
}