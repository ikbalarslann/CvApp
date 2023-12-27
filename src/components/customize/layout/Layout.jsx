const Layout = ({ setLayout }) => {
  return (
    <div className="sidebar__layout-options">
      <div>
        <div
          className="sidebar__layout-options__option top"
          onClick={() => setLayout("top")}
        ></div>
        <div className="sidebar__layout-options__option-label">top</div>
      </div>
      <div>
        <div
          className="sidebar__layout-options__option left"
          onClick={() => setLayout("left")}
        ></div>
        <div className="sidebar__layout-options__option-label">left</div>
      </div>
      <div>
        <div
          className="sidebar__layout-options__option right"
          onClick={() => setLayout("right")}
        ></div>
        <div className="sidebar__layout-options__option-label">right</div>
      </div>
    </div>
  );
};

export default Layout;
