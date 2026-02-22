import { Component } from '@angular/core';
import { Noticia } from '../../models/noticia';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {

  noticias: Noticia[] = [
    {
      titulo: 'Los beneficios de la dieta mediterránea',
      imagen: 'images/dieta.jpg',
      texto: 'Un nuevo estudio confirma que el uso de aceite de oliva y verduras frescas mejora la salud cardiovascular a largo plazo.',
      fecha: '2026-02-22'
    },

    {
      titulo: 'Destinos rurales para desconectar',
      imagen: 'images/turismo.jpg',
      texto: 'El turismo de naturaleza crece este año, con los parques nacionales como los lugares más visitados por los viajeros.',
      fecha: '2026-02-21'
    }
  ];
}
