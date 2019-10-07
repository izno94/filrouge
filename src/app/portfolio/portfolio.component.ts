import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router"
import { ArticlesOnlineService } from '../service/online.service';
@Component({
  selector: 'app-portfolio',
  templateUrl:'./portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

    portfolios;

  constructor(private service: ArticlesOnlineService,
              private router : Router) { }

  ngOnInit() {

    this.service.getAll().subscribe(          //Voir tous les Articles
   (resultat)=> {
    console.log(resultat);
    this.portfolios = resultat;
  })

  }
  onClickDelete(portfolio)                    //Supprime un Article
  {
    //console.log(id);
    this.service.delete(portfolio._id).subscribe(
      (resultat)=>{
        console.log(resultat);
        let index = this.portfolios.indexOf(portfolio);
        this.portfolios.splice(index,1);
      }
    )

  }


onClickUpdate(portfolio)
{
  console.log(portfolio)
  this.router.navigate(["/portfolio/update", portfolio._id])
}









}
