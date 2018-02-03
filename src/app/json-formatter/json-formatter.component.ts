import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.css']
})
export class JsonFormatterComponent implements OnInit {

  jsonString;
  invalid = false;
  success = false;
  errorMessage;
  constructor() { }

  ngOnInit() {
  }

  formatJson(jsonRaw) {
    try {
        this.jsonString = JSON.parse(jsonRaw);
        this.invalid = false;
        this.success = true;
    } catch(e) {
      this.invalid = true;
      this.success = false;
      this.errorMessage = e;
    }

  }

}
