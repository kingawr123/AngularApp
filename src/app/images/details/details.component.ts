import { Image } from './../../../models/image';
import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
  id: number = 0; 
  image: Image = {
    albumId: 0,
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: ''
  };

  constructor(private service: ImagesService, private route: ActivatedRoute) { }
  
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id);
    this.service.getImageById(this.id).subscribe(image => this.image = image);
  }
}
