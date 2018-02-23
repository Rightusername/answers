import { Component, OnInit } from '@angular/core';
import { Ng2DeviceService } from 'ng2-device-detector';
import { DataService } from '../data.service';
import { RouterLink } from '@angular/router';
import { BindingComponent } from '../binding/binding.component';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  constructor(private deviceService: Ng2DeviceService, private dataService: DataService) { }

  ngOnInit() {
  }

  changeColor(e) {
    if ( this.deviceService.getDeviceInfo().os === 'windows' ||
      this.deviceService.getDeviceInfo().os === 'linux' ||
      this.deviceService.getDeviceInfo().os === 'mac' ) {
      e.target.style.background = 'red';
    }
  }

  saveInput(e) {
    this.dataService.inputValue = e.target.value;
  }

}
