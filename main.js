function main() {
    var user = new User(1, "hej", "Anton");
    var ui = new UserInterface(user);
    ui.auxrender();
}