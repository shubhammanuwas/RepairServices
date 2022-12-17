import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private itemService : ItemService, private routes : Router) { }
  loading:any
  ngOnInit(): void {
    this.loaditems()
  }
  loaditems(){
    this.itemService.getItem().subscribe((data:any)=>{
      console.log(data)
      this.loading = data;
    })
  }
}
