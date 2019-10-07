import { Component, OnInit } from '@angular/core';
import { LocalService } from '../service/local.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private service : LocalService,
              private route : ActivatedRoute,
              private router : Router)
             { }
  articles
  nbArtParPage = 4
  nbPagination

  nbPage()
  {
    return Math.ceil (this.service.getAll().length / this.nbArtParPage)
  }

  ngOnInit() {
    this.route.queryParams.subscribe( ( query)=> {
      if(Object.keys(query).length !== 0)
      {
        this.articles = this.service.getFromTo();

      }
      else (query.page)
      {
       const numPage = query.page
       const result = this.service.getFromTo( numPage , this.nbArtParPage);


       if(result.length > 0)
       {
         this.articles = result;
       }
       else
       {
         this.router.navigate(["/not-found"])

       }
      }
    })







  }

}
