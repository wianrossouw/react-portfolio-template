import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, classes }) => {
  const { theme } = useTheme();
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${
          theme === "dark" ? "bg-white text-black" : "bg-black text-white"
        }  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${
          data.showCursor && "cursor-none"
        }  ${classes}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
        theme === "dark"
          ? "hover:bg-slate-600 text-white"
          : "hover:bg-slate-100"
      } hover:scale-105 active:scale-100  tablet:first:ml-0  ${
        data.showCursor && "cursor-none"
      } ${classes} link`}
    >
      {children}
    </button>
  );
};

const Blog = ({ posts, text, mounted, deleteBlog }) => {
  return (
    <div className="container mx-auto mb-10">
      <Header isBlog={true}></Header>
      <div className="mt-10">
        <h1
          ref={text}
          className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full"
        >
          Blog.
        </h1>
        <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10">
          {posts &&
            posts.map((post) => (
              <div
                className="cursor-pointer relative"
                key={post.slug}
                onClick={() => Router.push(`/blog/${post.slug}`)}
              >
                <img
                  className="w-full h-60 rounded-lg shadow-lg object-cover"
                  src={post.image}
                  alt={post.title}
                ></img>
                <h2 className="mt-5 text-4xl">{post.title}</h2>
                <p className="mt-2 opacity-50 text-lg">{post.preview}</p>
                <span className="text-sm mt-5 opacity-25">
                  {ISOToDate(post.date)}
                </span>
                {process.env.NODE_ENV === "development" && mounted && (
                  <div className="absolute top-0 right-0">
                    <Button
                      onClick={(e) => {
                        deleteBlog(post.slug);
                        e.stopPropagation();
                      }}
                      type={"primary"}
                    >
                      Delete
                    </Button>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Button;
export { Blog };
