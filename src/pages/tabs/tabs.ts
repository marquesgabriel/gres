import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Page1 } from '../page1/page1';
import { Page2 } from '../page2/page2';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Page1;
  tab2Root = Page2;
  tab3Root = AboutPage;

  constructor() {

  }
}
