import { Component} from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  // Номер телефона
  public showPhoneNumber: { phone: string }[] = [
    {
      phone: '+375 (29) 368-98-68'
    },
  ];

  protected readonly Component = Component;
}
