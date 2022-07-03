import { useState } from 'react';

const Panel = () => {
  const [icon, setIcon] = useState(false);
  const hangleIcon = () => setIcon(!icon);

  return (
    <div className="panel">
      <div className={icon ? 'panel__search active' : 'panel__search'}>
        <div className="panel__icon-github">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/pavlovsun"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>

        <div className="panel__icon-search" onClick={hangleIcon}>
          <i className="bi bi-search"></i>
        </div>

        <form className="panel__form" role="search">
          <input
            className={
              icon ? 'input active form-control' : 'input form-control'
            }
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default Panel;
