import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  public image:string="https://images.lider.cl/wmtcl?source=url[file:/productos/1138547a.jpg]&sink";
  public Titulo:string="Guitarra Fixita";
  @Input() dataEntrante:any;
  constructor(){}
  ngOnInit(): void {
    
  }

}
