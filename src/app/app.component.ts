import { Component } from '@angular/core';
import { FormGroup, Validators,FormControl} from '@angular/forms';
import { AppValidators } from './app.validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  ngOnInit() {
    this.totalvol=0;
    this.totaltrans=0;
    this.avgticket=0;
  }
  visaS=0;
       visaHH=0;
       masterS=0;
       masterHH=0;
       ebayS=0;
       ebayHH=0;
       americanS=0;
       americanHH=0;
       totalvol ;
       totaltrans : any;
       avgticket : any;
       currentrate : any;
      

  form = new FormGroup({

    description: new FormControl('',
      [Validators.required , AppValidators.cannotcontainNegativeVal]),

     sic_code: new FormControl('',
    [Validators.required , AppValidators.cannotcontainNegativeVal]),

    visa$ : new FormControl('',[
    Validators.required, AppValidators.cannotcontainNegativeVal 

    //SignupValidators.cannotContainSpace
    ]),

      visaH : new FormControl('', [
        Validators.required , AppValidators.cannotcontainNegativeVal
      ]),

      master$ : new FormControl('', [
        Validators.required , AppValidators.cannotcontainNegativeVal
      ]),

      masterH : new FormControl('', [
        Validators.required , AppValidators.cannotcontainNegativeVal
      ]),


      ebay$ : new FormControl('', [
        Validators.required , AppValidators.cannotcontainNegativeVal
      ]),

      ebayH : new FormControl('', [
        Validators.required , AppValidators.cannotcontainNegativeVal
      ]),

      american$ : new FormControl('', [
        Validators.required , AppValidators.cannotcontainNegativeVal
      ]),

      americanH : new FormControl('', [
        Validators.required , AppValidators.cannotcontainNegativeVal
      ]),

      totalvolume$ :  new FormControl('', [
        
      ]),

      totaltransactionH :  new FormControl('', [
        
      ]),

      avgTicket$ : new FormControl('', [
        Validators.required , 
      ]),

      currentrateH :  new FormControl('', [
        
      ]),


});


get description(){
  return this.form.get('description');
 }

 get sic_code()
 {
   return this.form.get('sic_code');
  }
  get visa$()
  {
   return this.form.get('visa$');
  }

  get visaH(){
    return this.form.get('visaH');
   }

   get master$()
   {
     return this.form.get('master$');
    }
    get masterH()
    {
     return this.form.get('masterH');
    }
    get ebay$(){
      return this.form.get('ebay$');
     }

     get ebayH()
     {
       return this.form.get('ebayH');
      }


      get american$()
     {
       return this.form.get('american$');
      }
      get americanH()
     {
       return this.form.get('americanH');
      }

      getvisaS($event){
         this.visaS = parseFloat($event.target.value);
         this.totalvol= this.visaS + this.ebayS + this.masterS + this.americanS;
         if(this.totaltrans !=0){
           this.avgticket = this.totalvol/this.totaltrans;
         }
        
      
      }

      getvisaHH($event)
      {

        this.visaHH=  parseFloat($event.target.value);  
        this.totaltrans = this.visaHH + this.masterHH + this.ebayHH + this.americanHH;
        if(this.totaltrans !=0){
          this.avgticket = this.totalvol/this.totaltrans;
        }
        
      }
      getmasterS($event){
        this.masterS = parseFloat($event.target.value);
        this.totalvol= this.visaS + this.ebayS + this.masterS + this.americanS;
        if(this.totaltrans !=0){
          this.avgticket = this.totalvol/this.totaltrans;
        }
      
      }
      getmasterHH($event){
        this.masterHH=  parseFloat($event.target.value);  
        this.totaltrans = this.visaHH + this.masterHH + this.ebayHH + this.americanHH;
        if(this.totaltrans !=0){
          this.avgticket = this.totalvol/this.totaltrans;
        }
      }
      getebayS($event){
        this.ebayS= parseFloat($event.target.value);
        this.totalvol= this.visaS + this.ebayS + this.masterS + this.americanS;
        if(this.totaltrans !=0){
          this.avgticket = this.totalvol/this.totaltrans;
        }
       
      }
      getebayHH($event){
        this.ebayHH=  parseFloat($event.target.value);  
        this.totaltrans = this.visaHH + this.masterHH + this.ebayHH + this.americanHH;
        if(this.totaltrans !=0){
          this.avgticket = this.totalvol/this.totaltrans;
        }
      }
      getamericanS($event){
         this.americanS = parseFloat($event.target.value);
         this.totalvol= this.visaS + this.ebayS + this.masterS + this.americanS;
         if(this.totaltrans !=0){
          this.avgticket = this.totalvol/this.totaltrans;
        }
       
      }
      getamericanHH($event){
        this.americanHH=  parseFloat($event.target.value);  
        this.totaltrans = this.visaHH + this.masterHH + this.ebayHH + this.americanHH;
        if(this.totaltrans !=0){
          this.avgticket = this.totalvol/this.totaltrans;
        }
      }


     


     

  obj=[{name : "Interchange+.10%and $0.10" , savings: 1331.33 , residuals : 26149, rate : 2.29},
  {name : "Interchange+.10%and $0.10" , savings: 1331.33 , residuals : 26149, rate : 2.29},
  {name : "Interchange+.10%and $0.10" , savings: 1331.33 , residuals : 26149, rate : 2.29},
  {name : "Interchange+.10%and $0.10" , savings: 1331.33 , residuals : 26149, rate : 2.29},
  {name : "2.50% Flat" , savings: 929 , residuals : 166.66, rate : 2.75},
  {name : "2.75% Flat" , savings: 721.65 , residuals : 332.55, rate : 2.87}
 

]
}
