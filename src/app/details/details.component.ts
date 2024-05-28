import { Component, OnInit } from '@angular/core';
import { ParfumService } from '../services/parfum.service';
import { MagasinService } from '../services/magasin.service'; 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  magasins: any[] = [];
  parfums: any[] = [];
  constructor(private parfumService: ParfumService,
    private magasinService: MagasinService) { }

  ngOnInit(): void {
    this.loadListMagasins();
    this.loadListParfums();
  }

  loadListParfums(): void {
    this.parfumService.getListParfums().subscribe (
      data => {
        console.log(data);
        this.parfums.push(...data);
        // recuper le nom du magasin du chaque id magasin 
        this.parfums.forEach(parfum => {
          this.magasinService.getMagasin(parfum.idMagasin).subscribe(
            magasin => {
              parfum.nomMagasin = magasin.nomMagasin;
             
            },
            err => console.log(err)
          );
        });
      },
      err => console.log(err)
    );
  }

  loadListMagasins(): void {
    this.magasinService.getAllMagasins().subscribe(
      data => {
        console.log(data);
        this.magasins.push(...data);
      },
      err => {
        console.error(err);
      }
    );
  }

}
