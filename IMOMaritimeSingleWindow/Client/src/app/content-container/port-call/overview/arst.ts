import { Injectable } from "@angular/core";
import { log } from "util";
import { Attribute } from "@angular/compiler";
import { forEach } from "@angular/router/src/utils/collection";


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
           "PORT CALL" : this.scopes.group2,
       };
       this.entry_scope.USERS  = this.entry_scope.SHIPS = this.entry_scope.COMPANIES
                               = this.scopes.group1;
       this.entry_scope.USERS = ["user1"];
   }

   getEntries(role: string){
       let entries: string[] = [];

       this.entry_scope.forEach(a => a.forEach(s => console.log(s)));
   }
}