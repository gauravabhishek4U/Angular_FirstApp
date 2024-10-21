import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule} from '@angular/router';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // private router = inject(Router);
  // val: number = 2;
  // courses: any[] = [];

  constructor(private router: Router){}

  navigateToAbout(){
    this.router.navigate(['/about']);
  }
}
