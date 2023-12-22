import { Component } from '@angular/core';
import {environment} from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  constructor(private http: HttpClient) {}
  downloadCV() {
    const cvUrl = environment.cvFilePath;
    this.http.get(cvUrl, { responseType: 'blob' })
      .subscribe((data: any) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const downloadLink = document.createElement('a');

        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = 'MahfouzCV.pdf';

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      });
  }
}
