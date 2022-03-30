import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post =
    {
      title: 'Mon premier post',
      images: [
        {
          id: 1,
          src: 'https://via.placeholder.com/600x600?text=yakupeyisan1',
          isActive: true
        },
        {
          id: 2,
          src: 'https://via.placeholder.com/600x600?text=yakupeyisan2',
          isActive: false
        },
        {
          id: 3,
          src: 'https://via.placeholder.com/600x600?text=yakupeyisan3',
          isActive: false
        }
      ],
      date: "2020-01-01",
      commentCount: 50,
      likeCount: 100,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  constructor() { }

  ngOnInit(): void {
  }
  changeImage(image: any) {
    this.post.images.forEach(image => {
      image.isActive = false;
    });
    image.isActive = true;
  }
}
