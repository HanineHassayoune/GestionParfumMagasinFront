import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ParfumService } from '../services/parfum.service';
import { MagasinService } from '../services/magasin.service';

@Component({
  selector: 'app-edit-parfum',
  templateUrl: './edit-parfum.component.html',
  styleUrls: ['./edit-parfum.component.css']
})
export class EditParfumComponent implements OnInit {

  magasins: any[] = [];
  formParfum!:FormGroup;
  submitted:boolean=false;

  parfumId!: string;
  constructor(private parfumService:ParfumService,
    private fb:FormBuilder,
    private router:Router,
    private route :ActivatedRoute,
    private magasinService: MagasinService) { }

  ngOnInit(): void {
    this.loadListMagasins();
    this.formParfum=this.fb.group({
      imageParfum: ['', Validators.required],
      nomParfum: ['', Validators.required],
      prix: ['', Validators.required],
      volume: ['', Validators.required],
      type: ['', Validators.required],
      marque: ['', Validators.required],
      idMagasin: ['', Validators.required]
         
    });


    // Get shoes ID from route params
    this.route.params.subscribe(params => {
      this.parfumId = params['id'];
      // Fetch shoes details using shoesId and populate the form
      this.parfumService.getParfum(this.parfumId).subscribe(
        parfum => {
          this.formParfum.patchValue({
            imageParfum:parfum.imageParfum,
            nomParfum: parfum.nomParfum,
            prix: parfum.prix,
            volume: parfum.volume,
            type: parfum.type,
            marque: parfum.marque,
            idMagasin:parfum.idMagasin,
            
          });
        },
        error => {
          console.error('Error fetching parfum details:', error);
        }
      );
    });
  }

  submit(): void {
    this.submitted = true;
    if (this.formParfum.invalid) {
      return;
    }

    // Call service to update parfum
    this.parfumService.updateParfum(this.parfumId, this.formParfum.value).subscribe(
      data => {
        console.log('parfum updated successfully:', data);
        this.router.navigate(['liste']); // Redirect to parfum list after successful update
      },
      error => {
        console.error('Error updating parfums:', error);
      }
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

  onMagasinSelectionChange(event: any): void {
    console.log(this.formParfum)
    // recuperer l'id du magasin selectionné
    const selectedMagasinId = this.formParfum.get('idMagasin')?.value;
    console.log("Magasin sélectionné :", selectedMagasinId);
  }
  
}

