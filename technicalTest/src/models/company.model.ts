import { Desk } from "./desk.model";

export class Company{
    private deskCommercialList: Desk[] = [];
    private deskDeveloperList: Desk[] = [];

    constructor(){}

    public getDeskCommercialList():  Desk[]{
        return this.deskCommercialList;
    }
    public getDeskDeveloperList():  Desk[]{
        return this.deskDeveloperList;
    }

    public addEmployes(deskList: Desk[]): Boolean{
        let result: Boolean = false;
        for (let index = 0; index < deskList.length; index++) {
            const desk = deskList[index];
            if (desk.addEmployes()){
                console.log("l'employé a été ajouté");
                
                return true;
            }
            
        }
        console.log("l'employé n'a pas été ajouté");
        return result;
    }
}