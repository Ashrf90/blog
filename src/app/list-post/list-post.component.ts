import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { RemoveService } from  '../services/remove.service'

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit{
  
constructor(private article: ListService, private removeArticle: RemoveService){}

articleData: any = [];

ngOnInit(): void {
  this.article.getAllArticles().subscribe((allData) => {
    console.log(allData);
    this.articleData=allData;
  })
  
}

Delete(article_id:any){
  this.removeArticle.deleteArticle(article_id).subscribe((result) => {
    //console.log(result);
    this.ngOnInit();
  })

}

}
