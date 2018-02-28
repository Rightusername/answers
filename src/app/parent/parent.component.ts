import { OnInit, Component,
  Inject,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild('componentContainer', { read: ViewContainerRef }) container;
  componentRef;
  constructor(private resolver: ComponentFactoryResolver) {

  }

  createComponent() {
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(ChildComponent);
    this.componentRef = this.container.createComponent(factory);
  }

  ngOnInit() {
    setTimeout(() => {
      this.createComponent();
    }, 3000);
  }


}
