import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { RestroServiceService } from 'src/app/restro-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css'],
})
export class UpdateRestroComponent implements OnInit {
  data: any;
  alert: boolean
  id: any;

  constructor(
    private listService: RestroServiceService,
    private activatedroutes: ActivatedRoute
  ) {}

  addUserForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  ngOnInit(): void {
    this.alert = false;
    this.listService.getUser().subscribe();
    this.data = this.addUserForm.value;
    this.id = this.activatedroutes.snapshot.params['id'];

    this.listService.getUserIdData(this.id).subscribe((res) => {
      this.addUserForm = new FormGroup({
        name: new FormControl(res['name']),
        email: new FormControl(res['email']),
        address: new FormControl(res['address']),
      });
    });
  }

  updateUser = () => {
    // console.log(this.addUserForm.value);
    // this.data = this.addUserForm.value;
    // this.listService.saveUser(this.data).subscribe();
    // this.alert = true;
    //
    this.listService
      .updateUserData(this.id, this.addUserForm.value)
      .subscribe();
    this.alert = true;
  };
  close = () => {
    this.alert = false;
  };
}
