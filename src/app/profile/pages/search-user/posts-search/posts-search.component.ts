import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/profile/services/post.service';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-posts-search',
  templateUrl: './posts-search.component.html',
  styleUrls: ['./posts-search.component.css']
})
export class PostsSearchComponent implements OnInit{

  constructor(private postService: PostService, 
    private profileService: ProfileService){}

  postsSearch = [] 


  get obtenerProfile(){
    return this.profileService.profile;
  }


  ngOnInit(): void {
    this.postService.obtenerPostsSearch('pepefg').subscribe(
      resp => {
        
        console.log('esto es ' + resp)
      })
  }

}
