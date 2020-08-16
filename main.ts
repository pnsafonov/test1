
class MainTalker {

    say(): string {
        const msg = "MainTalker: Hello!";
        console.log(msg);
        return msg;
    }

}

const mt = new MainTalker();
mt.say();
