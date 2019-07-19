import { Component, OnInit } from '@angular/core';
import { Animations } from '../animations/fadein-fadeout.animation';
import { UploadApiService } from '../upload-api.service';
@Component({
  selector: 'eda-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  animations: [Animations.animeTrigger]
})
export class UploadComponent implements OnInit {
  fileName: string = 'Select the file!'
  isFileupload: boolean = false;
  isNextEnabled: boolean = false;
  constructor(private uploadApiService: UploadApiService) { }

  ngOnInit() {
  }

  changeAttr(event) {
    console.log(event);
    this.fileName = event.target.files[0].name || 'Select the file!';
    this.isFileupload = true;
    const files: FileList = event.target.files[0];

    // setTimeout(() => {
    //   this.isFileupload = false;
    //   this.isNextEnabled = true;
    // }, 10500);
    this.uploadFile(files);
  }

  uploadFile(files) {
    this.uploadApiService.uploadFile(files);
  }
}
