import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {
  @Input() title?: string;
  @Input() body?: string;
  @Input() icon?: string;
}
