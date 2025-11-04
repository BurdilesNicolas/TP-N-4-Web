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
