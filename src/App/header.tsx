import "@material/drawer/dist/mdc.drawer.min.css";

function AppHeader() {
  let drawer = (
    <aside className="mdc-drawer" id="header">
      <div className="mdc-drawer__content">
        <nav className="mdc-list">
          <a className="mdc-list-item mdc-list-item--activated" href="/item-1" aria-current="page">
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
  )

  return drawer;
}

export { AppHeader }