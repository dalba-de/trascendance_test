import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiService } from '../api.service';
import { Token } from '../token'


@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  token: string = '';

  ngOnInit(): void {
    let uri: string = window.location.href;
    let auth = "/auth";
    uri = uri.replace('4200', '3000');
    let output = [uri.slice(0, 21), auth, uri.slice(21)].join('');
    uri = output;
    this.getToken(uri);
  }

  getToken(uri: string): void {
    this.apiService.getToken(uri).subscribe(token => this.token = token);
  }

}
