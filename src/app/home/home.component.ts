import { Component, OnInit } from '@angular/core';
import { EscenaComponent } from './escena/escena.component';
import { CommonModule } from '@angular/common';
import { iStep } from '../interfaces/iStep';
import { StepsService } from '../services/steps.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    EscenaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  frasesArray: iStep[] = [];

  constructor(private stepService: StepsService) {}

    ngOnInit(): void {
      this.frasesArray = this.stepService.getFrasesArray();
    }
}
