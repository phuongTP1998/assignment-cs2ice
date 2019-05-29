import { Injectable } from "@angular/core";
import { User } from "./Model/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private users: User[];

  constructor() {
    this.users = this.getUsers();
  }

  public addUser(username: string, password: string) {
    let user = new User(username, password);
    this.users = this.getUsers();

    this.users.push(user);
    this.setLocalStorageUsers(this.users);
  }

  public getUsers(): User[] {
    let localStorageUser = JSON.parse(localStorage.getItem("users"));
    return localStorageUser == null ? [] : localStorageUser.users;
  }

  public loginIn(username: string, password: string): boolean {
    let users = this.getUsers();
    users = users.filter(
      user => user.username === username && user.password === password
    );
    if (users.length != 0) {
      return true;
    } else {
      return false;
    }
  }

  public registerUser(username: string, password: string): boolean {
    let users = this.getUsers();
    users = users.filter(
      user => user.username === username && user.password === password
    );
    if (users.length != 0) {
      return false;
    } else {
      this.addUser(username, password);
      return true;
    }
  }

  private setLocalStorageUsers(users: User[]) {
    localStorage.setItem("users", JSON.stringify({ users: users }));
  }
}
