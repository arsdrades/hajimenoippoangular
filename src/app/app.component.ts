import { Component, OnInit } from '@angular/core';


interface Tarjeta{
  nombre:string;
  marca:string;
  codigo:number;
  valor:number;
  img:string;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'que pasa cabros';
  public ArregloTarjetas: Tarjeta []=[];

  ngOnInit(): void {
    
    this.ArregloTarjetas=[
      {nombre:"Bateria Electronica Nitro Mesh Kit", marca: "Alesis",codigo:1,valor:599990,img:"https://images.lider.cl/wmtcl?source=url[file:/productos/1221240a.jpg]&sink"},
      {nombre:"Guitarra Electro Acustica 41 con Funda", marca: "Sevillana",codigo:2,valor:89990,img:"https://images.lider.cl/wmtcl?source=url[file:/productos/1138547a.jpg]&sink"},
      {nombre:"Teclado 61 teclas Mls-6633 Principiante", marca: "Tomasstore",codigo:3,valor:75990 ,img:"https://i5.walmartimages.com/asr/0dfa1327-d9f4-4344-a57a-a95d716e3f5c.7767337ec1922a03ea339759b183df34.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff"},
      {nombre:"Micorfono De Estudio Podcast", marca: "Skp",codigo:4,valor:26990 ,img:"https://images.lider.cl/wmtcl?source=url[file:/productos/1219651a.jpg]&sink"},
      {nombre:"Bateria Electronica Nitro Mesh Kit", marca: "Alesis",codigo:1,valor:599990,img:"https://images.lider.cl/wmtcl?source=url[file:/productos/1221240a.jpg]&sink"},
      {nombre:"Guitarra Electro Acustica 41 con Funda", marca: "Sevillana",codigo:2,valor:89990,img:"https://images.lider.cl/wmtcl?source=url[file:/productos/1138547a.jpg]&sink"},
      {nombre:"Teclado 61 teclas Mls-6633 Principiante", marca: "Tomasstore",codigo:3,valor:75990 ,img:"https://i5.walmartimages.com/asr/0dfa1327-d9f4-4344-a57a-a95d716e3f5c.7767337ec1922a03ea339759b183df34.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff"},
      {nombre:"Micorfono De Estudio Podcast", marca: "Skp",codigo:4,valor:26990 ,img:"https://images.lider.cl/wmtcl?source=url[file:/productos/1219651a.jpg]&sink"}
    ]  }
}
