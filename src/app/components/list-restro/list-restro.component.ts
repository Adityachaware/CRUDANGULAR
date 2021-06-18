import { Component, OnInit } from '@angular/core';
import { RestroServiceService } from 'src/app/restro-service.service';
@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css'],
})
export class ListRestroComponent implements OnInit {
  userList: [];

  constructor(private listservice: RestroServiceService) {}

  ngOnInit(): void {
    this.listservice.getUser().subscribe((res) => {
      this.userList = res;
    });
  }

  delete = (id) => {
    this.listservice.deleteUser(id).subscribe((res) => {
      console.log('delete');
      this.listservice.getUser().subscribe((res) => {
        this.userList = res;
      });
    });
  };
}
