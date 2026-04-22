function Article({ post }) {
  return (
    <article>
      <h2>{post.titulo}</h2>
      <p>
        <strong>{post.autor}</strong>
      </p>
      <time>{post.data}</time>

      {post.conteudo.map((texto, index) => (
        <p key={index}>{texto}</p>
      ))}

      <figure>
        <img src={post.imagem} alt="Praia do Nordeste" />
        <figcaption>{post.legenda}</figcaption>
      </figure>
    </article>
  );
}

export default Article;
