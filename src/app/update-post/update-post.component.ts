import { Component } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { UpdateService } from '../services/update.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {
  topics = ['Sports', 'Technologies', 'Economie', 'Societe', 'Culture']

  get Validate(){
    return this.updatepost.controls;
  }

  // create a formbuilder service //

  constructor(private fb: FormBuilder, private updateservice: UpdateService, private router: ActivatedRoute){}

  updatepost =  this.fb.group({
    name:  ['', [Validators.required, Validators.minLength(3)]],
    email:  ['', [Validators.required, Validators.email]],
    title:  ['', Validators.required],
    topic:  ['', Validators.required],
    content: ['', Validators.required]
  })

  ngOnInit(): void{
    //console.log(this.router.snapshot.params['id'])
    this.updateservice.getArticle(this.router.snapshot.params['id']).subscribe((result:any) =>{
      //console.log(result);
      this.  updatepost =  this.fb.group({
        name:  [result['name'], [Validators.required, Validators.minLength(3)]],
        email:  [result['email'], [Validators.required, Validators.email]],
        title:  [result['title'], Validators.required],
        topic:  [result['toic'], Validators.required],
        content: [result['content'], Validators.required]
      })
    })
  }

  update(){
    this.updateservice.updatepostData(this.router.snapshot.params['id'], this.updatepost.value).subscribe((result) => {
      console.log(result);
    })
  }


}
