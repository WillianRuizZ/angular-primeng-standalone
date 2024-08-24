import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNgDemoComponent } from "./app-prime-ng-demo/app-prime-ng-demo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeNgDemoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-primeng-standalone';
}
