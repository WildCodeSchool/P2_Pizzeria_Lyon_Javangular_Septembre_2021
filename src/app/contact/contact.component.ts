import {Component} from '@angular/core';
import {User} from 'src/shared/model/user.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  user: User = new User();

  onSubmit() {
    console.log(this.user);
    //alert('votre message bien reçu');
    Swal.fire('Votre message est bien enregistré');
  }
}
