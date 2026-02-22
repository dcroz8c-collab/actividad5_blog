import { Component } from '@angular/core';
import { Noticia } from '../../models/noticia';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {

  nuevaNoticia: Noticia = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha: ''
  };

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

  agregarNoticia() {

    if (this.nuevaNoticia.titulo == "" || this.nuevaNoticia.texto == "" || this.nuevaNoticia.imagen == "" || this.nuevaNoticia.fecha == "") {
    alert("Por favor, rellena todos los campos");
    return;
    }

    if (!this.nuevaNoticia.imagen.startsWith("http") && !this.nuevaNoticia.imagen.startsWith("./assets")) {
    alert("La imagen debe ser una URL válida o una ruta local");
    return;
    }

    if (this.nuevaNoticia.titulo.length < 5) {
    alert("El título es demasiado corto (mínimo 5 caracteres)");
    return;
    }
  
  
  if (this.nuevaNoticia.texto.length < 10) {
    alert("El contenido de la noticia es muy breve (mínimo 10 caracteres)");
    return;
    }


  

    this.noticias.push({ ...this.nuevaNoticia });

    this.nuevaNoticia = {
      titulo: '',
      imagen: '',
      texto: '',
      fecha: ''
    };
  }
}
