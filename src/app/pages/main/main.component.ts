import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  defaultImage =
    'https://i.pinimg.com/564x/cf/0e/b8/cf0eb8f809e7c67512757fc73a42c6d9.jpg';
  image =
    'https://i.pinimg.com/564x/f5/70/5a/f5705a16ca380018c00b0764595e0b27.jpg';

  constructor() {}

  ngOnInit(): void {}
}
