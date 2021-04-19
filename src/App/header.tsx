import "@material/drawer/dist/mdc.drawer.min.css";
import "@material/list/dist/mdc.list.min.css";
import "@material/top-app-bar/dist/mdc.top-app-bar.min.css";

function AppHeader() {

  let topappbar = (
    <header className="mdc-top-app-bar">
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <button className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Open navigation menu">menu</button>
          <span className="mdc-top-app-bar__title">Inicio</span>
        </section>
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Favorite">favorite</button>
          <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Search">search</button>
          <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Options">more_vert</button>
        </section>
      </div>
    </header>
  )

  /* let drawer = (
    <aside className="mdc-drawer">
      <div className="mdc-drawer__content">
        <nav className="mdc-list">
          <a className="mdc-list-item mdc-list-item--activated" href="/" aria-current="page">
            <span className="mdc-list-item__ripple"></span>
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
            <span className="mdc-list-item__text">Inbox</span>
          </a>
          <a className="mdc-list-item" href="item-2">
            <span className="mdc-list-item__ripple"></span>
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
            <span className="mdc-list-item__text">Outgoing</span>
          </a>
          <a className="mdc-list-item" href="item-3">
            <span className="mdc-list-item__ripple"></span>
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
            <span className="mdc-list-item__text">Drafts</span>
          </a>
        </nav>
      </div>
    </aside>
  )*/

  return topappbar;
}

export { AppHeader }