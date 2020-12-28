// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
    #name;
    list = new Set();

    constructor(){
        this.#name = this.getRandomId();
    }

    getRandomId = () => {   
        let id = "";
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
        let i = 0;
        while (i < 2) {
            id += possible.charAt(Math.floor(Math.random() * possible.length));
            i++;
        }
        while (i < 5) {
            const element = Math.round(Math.random() * 9);
            id += element;
            i++;
        }
        if(this.list.has(id)){
            id = this.getRandomId();
        }
        this.list.add(id);
        return id;
    };

    get name(){
        return this.#name;
    }

    reset(){
        this.#name = this.getRandomId();
    }
}

Robot.releaseNames = () => { 
};