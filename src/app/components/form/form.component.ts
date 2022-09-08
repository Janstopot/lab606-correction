import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form : FormGroup
  name : FormControl
  occupation: FormControl
  email : FormControl
  subject : FormControl
  content: FormControl

  sent: boolean

  

  constructor(private formService : FormServiceService) {
    this.sent = false

    
    this.name = new FormControl('', [Validators.required])
    this.occupation = new FormControl()
    this.email = new FormControl('', [Validators.required, Validators.email])
    this.subject = new FormControl('', [Validators.required])
    this.content = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)])

    this.form = new FormGroup({
      name : this.name,
      occupation : this.occupation,
      email : this.email,
      subject : this.subject,
      content : this.content
    })
   }


  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value)
    this.formService.postToDB(this.form.value).subscribe(r => {
      console.log(r)
    })
    
    this.form.disable()
    this.sent = true

  }

}
