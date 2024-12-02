--
layout: base.njk
title: "Página de Inicio"
--
Bienvenido al índice de repositorios
Aquí están todos los repositorios disponibles:

<ul>
  {% for post in collections.all %}
    <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
  {% endfor %}
</ul>
