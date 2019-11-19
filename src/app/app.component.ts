import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [`
    .button { 
        padding: 5px;
        width: 140px; 
        border: 1px solid black; 
        display: inline-flex; 
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-sizing: border-box;
    }
    .grid {
      margin-bottom: 20px;
      display: grid;
      grid-template-columns: 140px 140px 140px;
      grid-template-rows: auto;
      grid-template-areas: 
        ".button .button .button"
        ".button .button .button"
        ".button .button .button"; 
    }
    .container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 200px;
    }
    .menu {
      position: fixed;  
      border: 1px solid black; 
      width: 140px; 
      padding: 5px;
      box-sizing: border-box;
      background: white;
    }`]
})
export class AppComponent {
  title = "ang1";
  employees = [{
    "Name": "Govind",
    "Sex": "Male",
    "Year": 2011
  },
  {
    "Name": "Govind2",
    "Sex": "Female",
    "Year": 2019
  }]

  /*------ Get the Position of an Element start -----*/
  public topMultipler: number = 1;
  public leftMultipler: number = 0;
  
  public setMultipliers(top: number, left: number) {
    this.topMultipler = top;
    this.leftMultipler = left;
  }
  /*------ Get the Position of an Element end -----*/

}
