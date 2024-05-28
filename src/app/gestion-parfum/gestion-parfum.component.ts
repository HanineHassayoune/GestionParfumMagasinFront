import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParfumService } from '../services/parfum.service';
import { MagasinService } from '../services/magasin.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-parfum',
  templateUrl: './gestion-parfum.component.html',
  styleUrls: ['./gestion-parfum.component.css']
})
export class GestionParfumComponent implements OnInit {

  magasins: any[] = [];
  parfums: any[] = [];
  selectedParfum: any;
  showUpdateForm: boolean = false;
  form!: FormGroup;
  submitted: boolean=false;

  filteredParfums: any[] = [];
  searchText: string = '';

  constructor (
      private fb: FormBuilder,
      private parfumService: ParfumService,
      private router: Router,
      private magasinService: MagasinService
  ){
    
  }

  ngOnInit(): void {
    this.loadListMagasins();
    this.loadListParfums();
    this.form = this.fb.group({
      departmentName: ['', Validators.required]
    });
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

  deleteParfum(parfum: any): void {
    if (confirm('Are you sure you want to delete this parfum?')) {
      this.parfumService.deleteParfum(parfum.id).subscribe(
        () => {
          console.log('parfum deleted successfully');
          const index = this.parfums.indexOf(parfum);
          if (index !== -1) {
            this.parfums.splice(index, 1);
          }
        },
        (err) => console.log(err)
      );
    }
  }

  onSubmit():void {}

  editParfum(parfum: any): void {
    this.router.navigate(['/edit-parfum', parfum.id]);
  }


 
  
}
