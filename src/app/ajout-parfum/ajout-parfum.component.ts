import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParfumService } from '../services/parfum.service';
import { Router } from '@angular/router';
import { MagasinService } from '../services/magasin.service';

@Component({
  selector: 'app-ajout-parfum',
  templateUrl: './ajout-parfum.component.html',
  styleUrls: ['./ajout-parfum.component.css']
})
export class AjoutParfumComponent implements OnInit {

  magasins: any[] = [];
  formParfum!: FormGroup;
  submitted: boolean = false;
  lisParfums: any[] = [];
  selectedMagasinId: string | undefined;


  constructor(private parfumService: ParfumService,
              private fb: FormBuilder,
              private route: Router,
              private magasinService: MagasinService) { }

  ngOnInit(): void {
    this.loadListMagasins();
    this.formParfum = this.fb.group({
      imageParfum: ['', Validators.required],
      nomParfum: ['', Validators.required],
      prix: ['', Validators.required],
      volume: ['', Validators.required],
      type: ['', Validators.required],
      marque: ['', Validators.required],
      idMagasin: ['', Validators.required]
    });
  }

  submit(): void {
    console.log(this.formParfum.value)
    this.parfumService.postParfum(this.formParfum.value).subscribe(
      data => {
        this.route.navigate(['liste']);
        console.log(this.formParfum.value);
      },
      err => {
        console.log(err);
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
