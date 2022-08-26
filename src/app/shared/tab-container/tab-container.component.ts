import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css'],
})
export class TabContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>;
  constructor() {}

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter((t) => t.active);

    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first);
    }
  }
  selectTab(tab: TabComponent) {
    this.tabs?.forEach((t) => {
      t.active = false;
    });
    tab.active = true;

    

    return false;
  }
}
