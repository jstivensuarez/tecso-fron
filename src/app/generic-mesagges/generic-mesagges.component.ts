import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-generic-mesagges',
  templateUrl: './generic-mesagges.component.html',
  styleUrls: ['./generic-mesagges.component.css']
})
export class GenericMesaggesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
