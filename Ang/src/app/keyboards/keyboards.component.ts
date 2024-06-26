import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardService } from '../keyboard.service';
import { Klawiatura } from '../keyboard.interface';
import { KlawiaturaDTO } from '../keyboard-dto.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-keyboards',
  templateUrl: './keyboards.component.html',
  styleUrls: ['./keyboards.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class KeyboardsComponent implements OnInit {
  keyboards: Klawiatura[] = [];
  newKeyboard: KlawiaturaDTO = {  model: '', typ: 1 };
  showForm: boolean = false;

  typy = [
    { value: 1, label: 'membranowa' },
    { value: 2, label: 'nożycowa' },
    { value: 3, label: 'mechaniczna' },
    { value: 4, label: 'optyczna' },
    { value: 5, label: 'hybrydowa' }
  ];

  constructor(private keyboardService: KeyboardService) { }

  ngOnInit(): void {
    this.getKeyboards();
  }

  getKeyboards(): void {
    this.keyboardService.getKeyboards().subscribe(keyboards => this.keyboards = keyboards);
  }

  addKeyboard(): void {
    this.keyboardService.addKeyboard(this.newKeyboard).subscribe(() => {
      this.getKeyboards();
      this.toggleForm();
      this.newKeyboard = { model: '', typ: 1 };
    });
  }

  deleteKeyboard(id: number): void {
    this.keyboardService.deleteKeyboard(id).subscribe(() => this.getKeyboards());
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  getTypLabel(value: number): string {
    const typ = this.typy.find(t => t.value === value);
    return typ ? typ.label : '';
  }
}
