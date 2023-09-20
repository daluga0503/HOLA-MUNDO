import {Greet} from './greet';
class HelloWorld implements Greet{
    private _name:string="";
    get name():string{
        return this._name;
    }

    set name(new_name:string){
        this._name=new_name;
    }
    private _surname:string="";

    get surname():string{
        return this._surname;
    }
    
    set surname(new_surname: string) {
        this._surname = new_surname
    }

    private _message:string="";

    get message():string{
        return this._message;
    }

    set message(new_message:string){
        this._message = new_message;
    }

    private _nick:string="";

    get nick():string{
        return this._nick;
    }

    set nick(new_nick:string){
        this._nick = new_nick;
    }

    constructor(){

    }

    sayHello():void{
        console.log(`${this.message} ${this.name} ${this.surname} ${this.nick}`);
    }
}

var hello = new HelloWorld();
hello.message="Hola Mundo, enespecial a ti";
hello.name="Daniel";
hello.surname="Luque Gallardo";
hello.nick="daluga";
hello.sayHello();