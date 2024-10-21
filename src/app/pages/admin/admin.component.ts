import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  model:any ={}
  cover!: string | null
  cover_file: any
  showError = false

  constructor() {}

  ngOnInit() {
    console.log('admin ngoninit');
  }

  onSubmit(form:NgForm){
    if(form.invalid){
      console.log("Form is invalid!!")
      form.control.markAllAsTouched();
      return
    }
    console.log(form.value)
  }

  onFileSelected(event: any) {
    console.log(event);
    const file = event.target.files[0];
    if (file) {
      // this.cover_file = file;
      this.cover_file.set(file);
      const reader = new FileReader();
      console.log(reader);
      reader.onload = () => {
        const dataUrl = reader.result!.toString();
         this.cover = dataUrl;
        //this.cover.set(dataUrl);
        console.log('image: ', this.cover);
      };
      reader.readAsDataURL(file);
       this.showError = false;
      //this.showError.set(false);
    }
  }
}
