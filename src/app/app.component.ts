import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  liketoo = "我也喜歡你"
  nolike =  "我也不喜歡你"
  num = 0
  title = 'again';

  like(){
    alert(this.liketoo);
  }
  unlike(){
    alert(this.nolike);
  }
}
