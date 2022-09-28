import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public POKEMONS: Array<Pokemon> = [
    {
      id: 1,
      nombre:'Bulbasaur',
      img:'https://images.cults3d.com/AqYDhkzTwZfLIog_ipsyo_q1WAU=/https://files.cults3d.com/uploaders/16165612/illustration-file/2bc70fa4-f03c-4173-93a7-560b522dc2b7/Bulbasaur_Pose01.jpg',
      habilidades:['latigo cepa', 'Gruñido'],
      fechaDeCaptura: this.fechaCapturado(60),
    },
    {
      id: 2,
      nombre:'Charmander',
      img:'https://media.redadn.es/imagenes/pokemaster_338177.jpg',
      habilidades:['bola de fuego', 'ataque rápido'],
      fechaDeCaptura: this.fechaCapturado(40),
    },
    {
      id: 3,
      nombre:'Squirtle',
      img:'https://images.cults3d.com/Mu9tFX5HEdhsXWuTPNoWW81hV9Y=/516x516/https://files.cults3d.com/uploaders/16165612/illustration-file/f3d954ee-5f84-4477-8540-32206f50324f/Squirtle_Stand01.jpg',
      habilidades:['chorro de agua', 'bola de agua'],
      fechaDeCaptura: this.fechaCapturado(90),
    },
    {
      id: 4,
      nombre:'Pikachu',
      img:'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2018/05/pikachu.jpg?resize=1080%2C608&quality=80&ssl=1',
      habilidades:['atack trueno', 'ataque rápido'],
      fechaDeCaptura: this.fechaCapturado(65),
    },
    {
      id: 5,
      nombre:'Mewto',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDeplsesWZZv-tIWTGfsYQIZuQlX2L0PWibQ&usqp=CAU',
      habilidades:['teletransportacion', 'no se cual mas'],
      fechaDeCaptura: this.fechaCapturado(72),
    },
    {
      id: 6,
      nombre:'Mew',
      img:'https://imagen.nextn.es/wp-content/uploads/2016/01/1601-27-Pok%C3%A9mon-Mew-3DS_00001.jpg?strip=all&lossy=1&ssl=1',
      habilidades:['no tengo idea', 'otro mas'],
      fechaDeCaptura: this.fechaCapturado(300),
    }
  ]
  pokemon: any;

  constructor() { }

  fechaCapturado (horasEnMinutos: number) : Date{
    const fechaActual = new Date();
    const fechaActualEnMiliSegundos = fechaActual.getTime();
    const miliSegundos = horasEnMinutos * 60000;
    const fechaCapturada = new Date(fechaActualEnMiliSegundos - miliSegundos);

    return fechaCapturada;
  }

  ngOnInit(): void {
  }

}
