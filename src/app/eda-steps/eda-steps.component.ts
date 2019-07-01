import { Component, OnInit } from "@angular/core";
import { Animations } from '../animations/fadein-fadeout.animation';

@Component({
  selector: "eda-eda-steps",
  templateUrl: "./eda-steps.component.html",
  styleUrls: ["./eda-steps.component.scss"],
  animations: [Animations.animeTrigger]
})
export class EdaStepsComponent implements OnInit {
  items: any[] = [];
  isFileUploaded: boolean;
  isMissingValueFinded: boolean;
  isMissingValueTreated: boolean;
  isRandomForest: boolean;
  isFeatureColExtracted: boolean;
  constructor() {}

  ngOnInit() {
    this.items = [
      { step: "1", name: "Uploading the file..." },
      { step: "2", name: "Finding the missing values..." },
      { step: "3", name: "Treating all missing values..." },
      { step: "4", name: "Running the Random Forest Algorthim..." },
      { step: "5", name: "Extracting the feature columns.." }
    ];
    this.updateValue();
  }
  updateValue() {
    setTimeout(() => {
      this.isFileUploaded = true;
      setTimeout(() => {
        this.isFileUploaded = false;
        this.isMissingValueFinded = true;
        setTimeout(() => {
          this.isFileUploaded = false;
          this.isMissingValueFinded = false;
          this.isMissingValueTreated = true;
          setTimeout(() => {
            this.isFileUploaded = false;
            this.isMissingValueFinded = false;
            this.isMissingValueTreated = false;
            this.isRandomForest = true;
            setTimeout(() => {
              this.isFileUploaded = false;
              this.isMissingValueFinded = false;
              this.isMissingValueTreated = false;
              this.isRandomForest = false;
              this.isFeatureColExtracted = true;
              setTimeout(() => {
                this.isFileUploaded = false;
                this.isMissingValueFinded = false;
                this.isMissingValueTreated = false;
                this.isRandomForest = false;
                this.isFeatureColExtracted = false;
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 500);
  }
}
