import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  standalone: true,
})
export class AppComponent {
  nome = "Maria";
}
