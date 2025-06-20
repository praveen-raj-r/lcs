/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";
import blogs from "@/data/blogs";
import CustomButton from "@/components/app/custom-button";

const BlogDescriptionHeader = ({ blog }: any) => {
  return (
    <div className="my-4 w-full flex justify-center">
      <div className="max-w-5xl w-full mx-4 p-1">
        <div className="bg-[#F8F7F5] size-full flex md:flex-row gap-10 flex-col-reverse justify-between p-5 md:p-10 rounded-2xl">
          <div className="flex flex-col h-full justify-between gap-4">
            <h2 className="text-xl md:text-[50px] md:leading-[60px] font-semibold">
              {blog?.title}
            </h2>
            <span>{blog?.date}</span>
          </div>
          <div className="flex justify-center items-center">
            <img src={blog?.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

const InvalidBlog = () => {
  return (
    <div className="my-4 w-full flex justify-center">
      <div className="max-w-5xl w-full mx-4 p-1">
        <div className="bg-[#F8F7F5] size-full gap-10 flex flex-col items-center justify-center p-5 py-20 md:p-10 md:py-30 rounded-2xl">
          <h3 className="text-xl md:text-[50px] md:leading-[60px] font-semibold text-center">
            Oops! This blog post doesn't exist.
          </h3>
          <Link to="/blog">
            <CustomButton>Explore Other Articles</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogDescriptionPage = () => {
  const { blogId } = useParams();
  const blog = blogs.find((bl) => bl.link === blogId);
  const isBlogValid = Boolean(blog);

  if (!isBlogValid) {
    return <InvalidBlog />;
  }

  return (
    <div>
      <BlogDescriptionHeader blog={blog} />
    </div>
  );
};

export default BlogDescriptionPage;
