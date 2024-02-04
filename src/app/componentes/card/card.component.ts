import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input()
  imgProjeto: string = ""

  @Input()
  tipoProjeto: string = ""

  @Input()
  linkProjeto: string = ""


  constructor() { }

  ngOnInit(): void {
  }

}