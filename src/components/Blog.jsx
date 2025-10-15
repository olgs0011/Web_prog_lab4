import  blogData  from '../mockData/blogData';

/*const Blog = () => {
  const largeBlock = blogData.largeBlock;
  const smallBlocks = blogData.smallBlocks;

  return (
      <div className="blog">
          {/* Заголовок блога }
          <h2 className="header_blog">Многое Происходит, Мы Ведем об Этом Блог.</h2>

          {/* Большой блок }
          <div className="container_for_block">
            <div className="large_block">
              <img className="large_img" src={largeBlock.imgSrc} alt={largeBlock.text} />
              <div className="blok_large">
                  <p className="data_1">{largeBlock.date}</p>
                  <p className="text_1">{largeBlock.text}</p>
                  <a href={largeBlock.link} className="ssylka_eto_futare">
                      Читать полную статью
                  </a>
              </div>
            </div>
          </div>
          {/* Маленькие блоки }
          <div className="small_blocks">
              {smallBlocks.map((block, index) => (
                  <div className="text_and_img_2" key={index}>
                      <img className="photo" src={block.imgSrc} alt={block.text} />
                      <div className="blok_2">
                          <p className="data_2">{block.date}</p>
                          <p className="text_2">{block.text}</p>
                          <a href={block.link} className="ssylka_eto_futare_2">
                              Читать полную статью
                          </a>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};

export default Blog;*/

const Blog = () => {
    const largeBlock = blogData.largeBlock;
    const smallBlocks = blogData.smallBlocks;

    return (
        <div className="blog">
            {/* Заголовок блога */}
            <h2 className="header_blog">Многое Происходит, Мы Ведем об Этом Блог.</h2>

            {/* Большой блок */}
            <div className="container_for_block">
                <div className="large_block">
                <img className="large_img" src={largeBlock.imgSrc} alt={largeBlock.text} />
                <div className="blok_large">
                    <p className="data_big">{largeBlock.date}</p>
                    <p className="text_big">{largeBlock.text}</p>
                    <a href={largeBlock.link} className="ssylka_eto_futare">
                        Читать полную статью
                    </a>
                </div>
                </div>
            </div>
            {/* Маленькие блоки */}
            <div className="small_blocks">
                {smallBlocks.map((block, index) => (
                    <div className="text_and_img_small" key={index}>
                        <img className="photo" src={block.imgSrc} alt={block.text} />
                        <div className="blok_small">
                            <p className="data_small">{block.date}</p>
                            <p className="text_small">{block.text}</p>
                            <a href={block.link} className="ssylka_eto_futare">
                                Читать полную статью
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;