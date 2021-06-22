import { Component, OnInit } from '@angular/core';
import { Album } from "./albums/album.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'cognixia-demo-project';
  
  ngOnInit(): void {
    
}
}
