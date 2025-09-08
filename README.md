# 🎉 Sorteo de Amigos
https://gonzalo8707.github.io/Challenge-amigo-secreto/

Una aplicación web simple y divertida para realizar sorteos aleatorios entre amigos, con animaciones llamativas para el ganador.

## 📋 Descripción

Este proyecto permite agregar una lista de amigos y realizar sorteos aleatorios de manera fácil e interactiva. Perfecto para decidir quién paga la siguiente ronda, quién elige la película, o cualquier decisión grupal que necesite ser aleatoria.

## ✨ Características

- **Agregar amigos**: Añade nombres a tu lista de participantes
- **Validaciones inteligentes**: 
  - No permite nombres vacíos
  - Evita nombres duplicados
- **Sorteo aleatorio**: Algoritmo justo que selecciona un ganador al azar
- **Interfaz intuitiva**: Fácil de usar con soporte para tecla Enter
- **Responsive**: Funciona en dispositivos móviles y escritorio

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación
- **CSS3**: Estilos y animaciones
- **JavaScript**: Lógica de la aplicación
- **Animaciones CSS**: Efectos visuales para el ganador

## 📦 Instalación

1. Clona este repositorio:
```bash
git clone [URL_DE_TU_REPOSITORIO]
```

2. Navega al directorio del proyecto:
```bash
cd sorteo-amigos
```

3. Abre el archivo `index.html` en tu navegador favorito

¡No se requiere instalación de dependencias adicionales!

## 🎯 Uso

1. **Agregar amigos**:
   - Escribe el nombre en el campo de texto
   - Presiona "Añadir" o la tecla Enter
   - El nombre se agregará a la lista visible

2. **Realizar sorteo**:
   - Haz clic en "Sortear amigo"
   - El ganador aparecerá con una animación especial

3. **Repetir sorteos**:
   - Puedes realizar múltiples sorteos con la misma lista
   - Cada resultado anterior se limpia automáticamente

## 🎨 Características Técnicas

### Validaciones Implementadas
- ✅ Campo no vacío
- ✅ Sin nombres duplicados
- ✅ Lista no vacía antes del sorteo

### Animaciones
- Efecto de entrada llamativo para el ganador
- Transiciones suaves en la interfaz
- Animaciones CSS optimizadas

### Funcionalidades JavaScript
- Generación de números aleatorios seguros
- Manipulación dinámica del DOM
- Event listeners para mejor experiencia de usuario

## 📁 Estructura del Proyecto

```
sorteo-amigos/
├── index.html          # Estructura principal
├── styles.css          # Estilos y animaciones
├── script.js           # Lógica de la aplicación
└── README.md           # Este archivo
```

## 🛠️ Funciones Principales

### `agregarAmigo()`
- Valida y agrega nuevos amigos a la lista
- Actualiza la interfaz automáticamente

### `mostrarAmigos()`
- Renderiza la lista de amigos en el DOM
- Limpia y reconstruye la lista para evitar duplicados

### `sortearAmigo()`
- Genera un índice aleatorio
- Selecciona y muestra el ganador con animación

## 👥 Autor

Gonzalo Aravena
- GitHub: [Gonzalo8707](https://github.com/gonzalo8707)
- mail garavena535@gmail.com

⭐ ¡Si te gusta este proyecto, no olvides darle una estrella en GitHub!


