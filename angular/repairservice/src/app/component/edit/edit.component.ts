import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  edititem = new FormGroup({
    image: new FormControl(''),
    name: new FormControl(''),
    category: new FormControl(''),
    charge: new FormControl(''),
    description: new FormControl('')




  });

  constructor(private route:Router,private edito: ItemService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.edito.editData(this.router.snapshot.params['id']).subscribe((data: any) => {
      console.log(data);
      this.edititem = new FormGroup({
        image: new FormControl(data.image),
        name: new FormControl(data.name),
        category: new FormControl(data.category),
        charge: new FormControl(data.charge),
        description: new FormControl(data.description)
      });
    })
  }

  updateItem(){
    this.edito.updateItem(this.router.snapshot.params['id'],this.edititem.value).subscribe((data:any)=>{
      console.log(data);
      this.route.navigate(['/admin']);
    })
  }


}