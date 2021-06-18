import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { RestroServiceService } from 'src/app/restro-service.service';

@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css'],
})
export class AddRestroComponent implements OnInit {
  data: any;
  alert: boolean = false;
  constructor(private listService: RestroServiceService) {}

  ngOnInit(): void {}

  addUserForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  addUser = () => {
    console.log(this.addUserForm.value);
    this.data = this.addUserForm.value;
    this.listService.saveUser(this.data).subscribe();
    this.alert = true;
    this.addUserForm.reset({});
  };
  close = () => {
    this.alert = false;
  };
}
