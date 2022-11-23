export default function News({ article }) {
  return (
    <a rel="noreferrer" href={article.url} target="_blank">
      <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-[rgb(0,0,0,0.03)] dark:hover:bg-[rgb(255,255,255,0.03)] transition duration-300 ease-out">
        <div className="space-y-0.5">
          <h6 className="text-sm font-bold text-[#000] dark:text-[#fff] ">{article.title}</h6>
          <p className="text-xs font-medium dark:text-[#71767b] text-[rgb(83, 100, 113)]">
            {article.source.name}
          </p>
        </div>
        <img
          className="rounded-xl"
          width="70"
          src={article.urlToImage}
          alt=""
        />
      </div>
    </a>
  );
}
