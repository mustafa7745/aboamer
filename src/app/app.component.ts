import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  direction = "rtl"
  title = 'مجموعة ابو عامر للامن والسلامة';
   al() {
    alert("mustafa")
  }
}
