import { Component } from '@angular/core';

interface User {
    firstName: string;
    lastName: string;
    age: number;
}

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
    originalUsers: Array<User>;
    users: Array<User>;
    isChecked : boolean;

  constructor(){
    this.originalUsers = [
        {firstName: "Angular", lastName: "frame", age: 15},
        {firstName: "Leo", lastName: "Foo", age: 6},
        {firstName: "Vincent", lastName: "lucas", age: 9},
        {firstName: "Camille", lastName: "toto", age: 8}
    ];
    this.users = [...this.originalUsers];
    this.isChecked = false;
  }

  handleFilter(currentValue: boolean)
  {
    if( currentValue ) {
        this.users = this.originalUsers.filter(user => user.age >= 5 && user.age <= 10);
    } else {
        this.users = [...this.originalUsers];
    }
  }

}
