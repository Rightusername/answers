import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  @Input() title;
  constructor(private dataService: DataService ) { }

  ngOnInit() {
  }

  saveData(e){
    this.dataService.componentValue = e.target.value;
  }
}
