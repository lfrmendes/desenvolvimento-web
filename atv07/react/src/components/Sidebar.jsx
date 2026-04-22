function Sidebar({ posts }) {
  return (
    <aside>
      <h3>Posts Relacionados</h3>
      <ul>
        {posts.map((item, index) => (
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
