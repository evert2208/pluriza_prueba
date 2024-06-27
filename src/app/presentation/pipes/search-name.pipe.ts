import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/core/interfaces/user.interface';

@Pipe({
  name: 'searchNombre'
})
export class SearchNamePipe implements PipeTransform {
  transform(users:User[], user: string): User[] {
    let filteredUser: User[] = users;

    if (user.length !== 0) {
      user=user.toLowerCase();
      filteredUser = filteredUser.filter(x =>x.name.toLowerCase().includes(user));
    }
    return filteredUser;
  }

}
