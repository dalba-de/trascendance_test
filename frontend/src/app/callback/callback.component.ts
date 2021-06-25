import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let uri: string = window.location.href;
    uri = uri.replace('4200', '3000');
    console.log(uri);
  }


}
