import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss'
})
export class ImagesComponent  implements OnInit{
  images: Image[] = [];

  constructor(private service: ImagesService) { }
  ngOnInit() {
    this.service.getImages().subscribe(images => this.images = images);
  }
}
