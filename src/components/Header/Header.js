//-----------------------------------------
// COMPONENTE: Header (Cabecera de la app)
//-----------------------------------------

import { createSearchBar } from "../SearchBar/SearchBar.js";
import { loadIcon } from "../../utils/loadIcon.js";

export function createHeader({ onSearch, onReset }) {
  const header = document.createElement("header");
  header.className = "header";

  const nav = document.createElement("div");
  nav.className = "container header__inner";

  // Logo
  const logo = document.createElement("button");
  logo.type = "button";
  logo.className = "header__logo";
  logo.setAttribute("aria-label", "Volver al inicio");
  logo.innerHTML = loadIcon("pinterest");

  // Pestañas
  const tabs = document.createElement("ul");
  tabs.className = "header__tabs";

  // Pestaña Inicio
  const liHome = document.createElement("li");
  const btnHome = document.createElement("button");
  btnHome.type = "button";
  btnHome.className = "header__tab header__tab--active";
  btnHome.textContent = "Inicio";
  liHome.appendChild(btnHome);

  // Pestaña Explorar
  const liExplore = document.createElement("li");
  const linkExplore = document.createElement("a");
  linkExplore.href = "https://es.pinterest.com/today";
  linkExplore.target = "_blank";
  linkExplore.rel = "noopener noreferrer";
  linkExplore.className = "header__tab";
  linkExplore.textContent = "Explorar";
  liExplore.appendChild(linkExplore);

  // Botón hamburguesa (visible solo en tablet/móvil)
  const btnMenu = document.createElement("button");
  btnMenu.type = "button";
  btnMenu.className = "header__menu-btn";
  btnMenu.setAttribute("aria-label", "Abrir menú");
  btnMenu.innerHTML = loadIcon("menu");

  // Botón lupa (visible solo en móvil)
  const btnSearch = document.createElement("button");
  btnSearch.type = "button";
  btnSearch.className = "header__search-btn";
  btnSearch.setAttribute("aria-label", "Buscar");
  btnSearch.innerHTML = loadIcon("search");

  // Botón cerrar buscador (visible solo en móvil)
  const btnCloseSearch = document.createElement("button");
  btnCloseSearch.type = "button";
  btnCloseSearch.className = "header__close-search-btn";
  btnCloseSearch.setAttribute("aria-label", "Cerrar buscador");
  btnCloseSearch.innerHTML = loadIcon("close");

  // Pestaña Crear
  const liCreate = document.createElement("li");
  const linkCreate = document.createElement("a");
  linkCreate.href = "https://es.pinterest.com/pin-creation-tool/";
  linkCreate.target = "_blank";
  linkCreate.rel = "noopener noreferrer";
  linkCreate.className = "header__tab";
  linkCreate.textContent = "Crear";
  liCreate.appendChild(linkCreate);

  tabs.appendChild(liHome);
  tabs.appendChild(liExplore);
  tabs.appendChild(liCreate);

  // Nav
  const navEl = document.createElement("nav");
  navEl.className = "header__nav";
  navEl.setAttribute("aria-label", "Navegación principal");
  navEl.appendChild(tabs);

  

  // Buscador
  const searchWrapper = document.createElement("div");
  searchWrapper.className = "header__search-wrapper";
  const searchBar = createSearchBar(onSearch);
  searchWrapper.appendChild(searchBar);
  searchWrapper.appendChild(btnCloseSearch);

  // Acciones
  const actions = document.createElement("div");
  actions.className = "header__actions flex";

  const btnBell = document.createElement("button");
  btnBell.type = "button";
  btnBell.className = "header__icon-btn";
  btnBell.setAttribute("aria-label", "Notificaciones");
  btnBell.innerHTML = loadIcon("bell");

  const btnMsg = document.createElement("button");
  btnMsg.type = "button";
  btnMsg.className = "header__icon-btn";
  btnMsg.setAttribute("aria-label", "Mensajes");
  btnMsg.innerHTML = loadIcon("message");

  const btnAvatar = document.createElement("button");
  btnAvatar.type = "button";
  btnAvatar.className = "header__avatar";
  btnAvatar.setAttribute("aria-label", "Perfil de usuario");
  btnAvatar.textContent = "R";

  actions.appendChild(btnBell);
  actions.appendChild(btnMsg);
  actions.appendChild(btnAvatar);

  // Panel lateral
  const sidebar = document.createElement("div");
  sidebar.className = "header__sidebar";

  const sidebarOverlay = document.createElement("div");
  sidebarOverlay.className = "header__sidebar-overlay";

  // Clonar las pestañas para el panel
  const sidebarTabs = document.createElement("ul");
  sidebarTabs.className = "header__sidebar-tabs";

  const tabsData = ["Inicio", "Explorar", "Crear"];
  tabsData.forEach((text) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "header__sidebar-tab";
    btn.textContent = text;
    li.appendChild(btn);
    sidebarTabs.appendChild(li);
  });

  sidebar.appendChild(sidebarTabs);

  // Montar todo
  nav.appendChild(logo);
  nav.appendChild(btnMenu);
  nav.appendChild(navEl);
  nav.appendChild(btnSearch);
  nav.appendChild(searchWrapper);
  nav.appendChild(actions);
  header.appendChild(nav);
  header.appendChild(sidebarOverlay);
  header.appendChild(sidebar);

  // Eventos
  logo.addEventListener("click", () => onReset());
  btnHome.addEventListener("click", () => onReset());

  // Eventos del menú
  btnMenu.addEventListener("click", () => {
    sidebar.classList.add("header__sidebar--open");
    sidebarOverlay.classList.add("header__sidebar-overlay--open");
  });

  sidebarOverlay.addEventListener("click", () => {
    sidebar.classList.remove("header__sidebar--open");
    sidebarOverlay.classList.remove("header__sidebar-overlay--open");
  });

  // Evento lupa móvil
  btnSearch.addEventListener("click", () => {
    searchWrapper.classList.add("header__search-wrapper--visible");
    btnSearch.classList.add("header__search-btn--hidden");
    btnCloseSearch.classList.add("header__close-search-btn--visible");
    searchWrapper.querySelector("input").focus();
  });

  // Evento cerrar buscador
  btnCloseSearch.addEventListener("click", () => {
    searchWrapper.classList.remove("header__search-wrapper--visible");
    btnSearch.classList.remove("header__search-btn--hidden");
    btnCloseSearch.classList.remove("header__close-search-btn--visible");
  });

  

  return header;
}
