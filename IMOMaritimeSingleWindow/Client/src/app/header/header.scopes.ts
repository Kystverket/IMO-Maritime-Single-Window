import { Injectable } from "@angular/core";
import { Attribute } from "@angular/compiler";
import { forEach } from "@angular/router/src/utils/collection";
import { log } from "util";


@Injectable()
export class Scopes {

    private scopes: any;
    private entry_scope: any;

    constructor() {
        this.scopes = {
            "group1" : ["admin"],
            "group2" : ["agent"]
        };
        this.entry_scope = {
            "USERS" : [],
            "SHIPS" : [],
            "LOCATIONS" : [],
            "COMPANIES" : [],
            "PORT CALL" : this.scopes.group2.concat(this.scopes.group1),
        };
        this.entry_scope.USERS  = this.entry_scope.SHIPS = this.entry_scope.COMPANIES = this.entry_scope.LOCATIONS
                                = this.scopes.group1;
    }

    //Debug
    listScopes(){
        for (var key in this.entry_scope) {
            console.log(key + " -> " + this.entry_scope[key]);
            console.log(this.entry_scope[key]);
        }
    }

    listScopesForRole(role: string) {
        let entries: string[] = this.getEntries(role);
        console.log("Menu entries accessible for user:");
        for(let entry of entries)
            console.log(entry);
    }

    getEntries(role: string){

        let entries: string[] = [];
        for (var key in this.entry_scope) {
            if (this.entry_scope.hasOwnProperty(key)) {
                let roles: string[] = this.entry_scope[key];
                if(roles.some( r => r === role))
                    entries.push(key);
            }
        }
        return entries;
    }

}