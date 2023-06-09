import { Component } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { AddService } from '../services/add.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  topics = ['Sports', 'Technologies', 'Economie', 'Societe', 'Culture']

  get Validate(){
    return this.addpost.controls;
  }

  // create a formbuilder service //

  constructor(private fb: FormBuilder, private addservice: AddService){}

  addpost =  this.fb.group({
    name:  ['', [Validators.required, Validators.minLength(3)]],
    email:  ['', [Validators.required, Validators.email]],
    title:  ['', Validators.required],
    topic:  ['', Validators.required],
    content: ['', Validators.required]
  })

  onSubmit(){
    console.log(this.addpost.value);
    this.addservice.register(this.addpost.value).subscribe((result) => {
      console.log(result);
    })
  }

}
