document.addEventListener("DOMContentLoaded", () => {
  // === PANEL DE BÚSQUEDA ===
  const openSearch = document.getElementById("openSearch");
  const closeSearch = document.getElementById("closeSearch");
  const searchPanel = document.getElementById("searchPanel");
  const blurBackground = document.getElementById("blurBackground");

  if (openSearch && closeSearch && searchPanel && blurBackground) {
    openSearch.addEventListener("click", (e) => {
      e.preventDefault();
      searchPanel.classList.add("active");
      blurBackground.classList.add("active");
    });

    closeSearch.addEventListener("click", () => {
      searchPanel.classList.remove("active");
      blurBackground.classList.remove("active");
    });

    blurBackground.addEventListener("click", () => {
      searchPanel.classList.remove("active");
      blurBackground.classList.remove("active");
    });
  }

  // === PANEL DEL CARRITO ===
  const openCart = document.getElementById("openCart");
  const closeCart = document.getElementById("closeCart");
  const cartPanel = document.getElementById("cartPanel");
  const blurCart = document.getElementById("blurCart");

  if (openCart && closeCart && cartPanel && blurCart) {
    openCart.addEventListener("click", (e) => {
      e.preventDefault();
      cartPanel.classList.add("active");
      blurCart.classList.add("active");
    });

    closeCart.addEventListener("click", () => {
      cartPanel.classList.remove("active");
      blurCart.classList.remove("active");
    });

    blurCart.addEventListener("click", () => {
      cartPanel.classList.remove("active");
      blurCart.classList.remove("active");
    });
  }
});

document.getElementById("shopNowBtn").addEventListener("click", () => {
  window.location.href = "coleccion.html";
});

 const openSearch = document.getElementById("openSearch");
  const closeSearch = document.getElementById("closeSearch");
  const searchPanel = document.getElementById("searchPanel");
  const blurBackground = document.getElementById("blurBackground");

  openSearch.addEventListener("click", (e) => {
    e.preventDefault();
    searchPanel.classList.add("active");
    blurBackground.classList.add("active");
  });

  closeSearch.addEventListener("click", () => {
    searchPanel.classList.remove("active");
    blurBackground.classList.remove("active");
  });

  blurBackground.addEventListener("click", () => {
    searchPanel.classList.remove("active");
    blurBackground.classList.remove("active");
  });
  const cartIcon = document.querySelector('.icons a[href="#"]:nth-child(3)');
const closeCart = document.getElementById("closeCart");
const cartPanel = document.getElementById("cartPanel");
const blurCart = document.getElementById("blurCart");

cartIcon.addEventListener("click", (e) => {
  e.preventDefault();
  cartPanel.classList.add("active");
  blurCart.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cartPanel.classList.remove("active");
  blurCart.classList.remove("active");
});

blurCart.addEventListener("click", () => {
  cartPanel.classList.remove("active");
  blurCart.classList.remove("active");
});


  const cookieBanner = document.getElementById("cookieBanner");

  // Mostrar solo si no fue aceptado antes
    cookieBanner.classList.add("show");
  

  // Al aceptar
  acceptCookies.addEventListener("click", () => {
    cookieBanner.classList.remove("show");
    cookieBanner.classList.add("hide");
    setTimeout(() => {
      cookieBanner.style.display = "none";
    }, 500); // Espera a que termine la animación
  });



  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const progress = document.querySelector(".progress");
    let pct = 0;

    // Simular progreso hasta 100% en ~2.2s (ajustable)
    const interval = setInterval(() => {
      pct += 2; // incrementa 2% cada tick → 50 ticks -> ~2.2s con 44ms
      if (pct > 100) pct = 100;
      progress.style.width = pct + "%";

      if (pct >= 100) {
        clearInterval(interval);
        // Pequeña espera para que el usuario vea 100%
        setTimeout(() => {
          loader.classList.add("fade-out");
          // opcional: permitir scroll si lo habías deshabilitado
          document.body.style.overflow = "";
        }, 300);
      }
    }, 44);

    // Si querés forzar que el loader no permita scroll mientras está activo:
    document.body.style.overflow = "hidden";
  });

  document.addEventListener("DOMContentLoaded", () => {
  // === Buscador lateral ===
  const openSearch = document.getElementById("openSearch");
  const closeSearch = document.getElementById("closeSearch");
  const searchPanel = document.getElementById("searchPanel");
  const blurBackground = document.getElementById("blurBackground");

  openSearch.addEventListener("click", (e) => {
    e.preventDefault();
    searchPanel.classList.add("active");
    blurBackground.classList.add("active");
  });

  closeSearch.addEventListener("click", () => {
    searchPanel.classList.remove("active");
    blurBackground.classList.remove("active");
  });

  blurBackground.addEventListener("click", () => {
    searchPanel.classList.remove("active");
    blurBackground.classList.remove("active");
  });

  // === Ejemplo: Carrito lateral ===
  const openCart = document.getElementById("openCart");
  const closeCart = document.getElementById("closeCart");
  const cartPanel = document.getElementById("cartPanel");

  if (openCart && closeCart && cartPanel) {
    openCart.addEventListener("click", (e) => {
      e.preventDefault();
      cartPanel.classList.add("active");
      blurBackground.classList.add("active");
    });

    closeCart.addEventListener("click", () => {
      cartPanel.classList.remove("active");
      blurBackground.classList.remove("active");
    });

    blurBackground.addEventListener("click", () => {
      cartPanel.classList.remove("active");
      blurBackground.classList.remove("active");
    });
  }

  // === Ejemplo: Cartel de cookies ===
  const cookieBanner = document.getElementById("cookieBanner");
  const acceptCookies = document.getElementById("acceptCookies");

  if (cookieBanner && acceptCookies) {
    acceptCookies.addEventListener("click", () => {
      cookieBanner.classList.remove("active");
      localStorage.setItem("cookiesAccepted", "true");
    });

    if (!localStorage.getItem("cookiesAccepted")) {
      cookieBanner.classList.add("active");
    }
  }
});
document.querySelector(".search-btn").addEventListener("click", () => {
  const query = document.querySelector(".search-panel input").value.toLowerCase().trim();
  const productos = document.querySelectorAll(".producto");

  let encontrado = false;

  productos.forEach(producto => {
    const nombre = producto.dataset.nombre.toLowerCase();
    if (nombre.includes(query)) {
      producto.scrollIntoView({ behavior: "smooth", block: "center" });
      producto.style.outline = "3px solid #b20000";
      setTimeout(() => (producto.style.outline = "none"), 2000);
      encontrado = true;
    }
  });

  if (!encontrado) {
    alert("No se encontró ningún producto con ese nombre.");
  }
});
// 🛒 === LÓGICA DEL CARRITO ===

// Cargar carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Elementos del DOM
const cartContent = document.querySelector(".cart-content");

// Función para actualizar el carrito en el panel
function renderCarrito() {
  cartContent.innerHTML = ""; // Limpia el panel

  if (carrito.length === 0) {
    cartContent.innerHTML = "<p>No tienes productos en el carrito todavía.</p>";
    return;
  }

  carrito.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}" width="60">
      <div class="cart-info">
        <h4>${item.nombre}</h4>
        <p>$${item.precio}</p>
      </div>
      <button class="remove-item" data-index="${index}">✕</button>
    `;
    cartContent.appendChild(div);
  });

  // Actualiza LocalStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Botones eliminar
  document.querySelectorAll(".remove-item").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      carrito.splice(i, 1);
      renderCarrito();
    });
  });
}

// Detectar clicks en “Agregar al carrito”
document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const producto = e.target.closest(".producto");
    const nuevoProducto = {
      nombre: producto.dataset.nombre,
      precio: producto.dataset.precio,
      imagen: producto.dataset.imagen
    };

    carrito.push(nuevoProducto);
    renderCarrito();

    // Abre el panel del carrito
    document.getElementById("cartPanel").classList.add("active");
    document.getElementById("blurCart").classList.add("active");
  });
});

// Render inicial (si había algo guardado)
renderCarrito();

    function cambiarImagen(img) {
      document.getElementById("mainImg").src = img.src;
    }

    // Selector de talle
    const talles = document.querySelectorAll(".talles button");
    talles.forEach(btn => btn.addEventListener("click", () => {
      talles.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    }));
