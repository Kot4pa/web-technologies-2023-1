import { Pizza } from "./pizza";

export class Margherita extends Pizza{
    constructor(size:string){
        if (size == "Большая"){
            super("Маргарита", 700, 500, size, "./assets/Img/margarita.png")
        }
        else if (size == "Маленькая"){
            super("Маргарита", 600, 400, size, "./assets/Img/margarita.png")
        }
        else{
            throw new Error("Размер указан неправильно!");
        }
    }
}