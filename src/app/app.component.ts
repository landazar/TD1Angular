import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TD1Ex2';
  imageUrl:string ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryn_uiiwXY--Ty51yHavKRNNwBsXEPF29ZQ&usqp=CAU";
  nomClass = "rouge";
  isActif=false;

  test() {
    console.log("Bouton cliqué");
  }

  utilisateurs = [
    {"nom" : "Dupont", "prenom" : "Nicolas", "age" : 25, "email" : "test@test;fr", "tel" : "123"},
    {"nom" : "Durand", "prenom" : "Paul", "age" : 45, "email" : "test1@test;fr", "tel" : "1234"},
    {"nom" : "Dubois", "prenom" : "François", "age" : 32, "email" : "test2@test;fr", "tel" : "1235"}
    ]

  isDetails = false;
  montreDetails()
  {
    this.isDetails=true;
  }

  cacheDetails()
  {
    this.isDetails=false;
  }

  para:string ="";

  user:{nom:string, prenom:string, age:number, email:string, tel:string}={"nom" : "Dupont", "prenom" : "Nicolas", "age" : 25, "email" : "test@test;fr", "tel" : "123"}

  ajouter()
  {
    this.user.nom=this.para;
    this.utilisateurs.push(this.user);
  }
}
