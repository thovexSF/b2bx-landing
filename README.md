# B2B Express – Sitio estático

Réplica estática de [b2bx.cl](https://www.b2bx.cl) lista para GitHub Pages.

## Deploy en GitHub Pages

### 1. Crear repo en GitHub
```bash
git init
git add .
git commit -m "Initial commit"
gh repo create b2bx-landing --public --push --source=.
```

### 2. Activar GitHub Pages
1. Ir a **Settings → Pages**
2. En *Source* seleccionar **Deploy from a branch**
3. Branch: `main` / carpeta: `/ (root)`
4. Guardar

El sitio quedará disponible en `https://TU_USUARIO.github.io/b2bx-landing`

---

## Dominio propio (b2bx.cl)

### En tu proveedor de dominio (NIC Chile u otro), agregar estos DNS:

**Registros A** (apuntan a GitHub Pages):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Registro CNAME** (para www):
```
www  →  TU_USUARIO.github.io
```

### En GitHub Pages:
1. Settings → Pages → Custom domain
2. Ingresar `b2bx.cl`
3. Marcar **Enforce HTTPS**

> El archivo `CNAME` ya está incluido en el repo con el valor `b2bx.cl`.

---

## Estructura del proyecto

```
b2bx-landing/
├── index.html
├── sobre-nosotros.html
├── contacto.html
├── cargas-nacionales.html
├── cargas-internacionales.html
├── cargas-maritimas.html
├── servicios-logisticos.html
├── cargas-peligrosas.html
├── cargas-valoradas.html
├── cargas-radioactivas.html
├── cajas-certificadas.html
├── CNAME
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── images/
```

## Formulario de contacto

El formulario en `contacto.html` actualmente usa `mailto:`. Para recibir emails reales sin backend, reemplazar por [Formspree](https://formspree.io):

1. Crear cuenta en formspree.io
2. Crear un nuevo form y copiar el endpoint
3. En `contacto.html` cambiar:
```html
<form class="contact-form" id="contactForm"
      action="https://formspree.io/f/TU_ID"
      method="POST">
```
4. Eliminar el `id="contactForm"` y el JS del submit (Formspree lo maneja solo)
