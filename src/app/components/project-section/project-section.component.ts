import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css']
})
export class ProjectSectionComponent {
@Input() title?: string;
@Input() image?: string;
@Input() text?: string;
@Input() number?: string;
@Input() isLeft?: boolean;
}
