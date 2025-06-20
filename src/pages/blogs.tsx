/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import blogs from "@/data/blogs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const Blogs = () => {
  const triggers = [
    { label: "All", value: "all" },
    { label: "Indicators", value: "indicators" },
    { label: "Controllers", value: "controllers" },
    { label: "Onboard Weighing", value: "onboard-weighing" },
    { label: "Commercial", value: "commercial" },
    { label: "Our Company", value: "company" },
  ];

  return (
    <div>
      <div className="w-full justify-center flex items-center my-10">
        <div className="max-w-5xl w-full mx-4">
          <Tabs defaultValue="all" className="w-full">
            <ScrollArea className="rounded-md border md:border-0 whitespace-nowrap py-2 mx-4 mb-6">
              <div className="flex justify-center">
                <TabsList className="md:gap-4 bg-transparent *:data-[state=active]:bg-[#D90429] *:data-[state=active]:text-white *:rounded-2xl *:w-auto *:text-lg *:py-1 *:px-4 *:cursor-pointer">
                  {triggers.map((tr) => (
                    <TabsTrigger key={tr.value} value={tr.value}>
                      {tr.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            {triggers.map((blogTab) => {
              const filtered =
                blogTab.value === "all"
                  ? blogs
                  : blogs.filter((blog) => blog.type === blogTab.value);

              return <BlogsTabsContent filtered={filtered} blogTab={blogTab} />;
            })}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

const BlogsTabsContent = ({ blogTab, filtered }: any) => {
  return (
    <TabsContent key={`${blogTab.value}-blogTAb`} value={blogTab.value}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filtered.map((b: any) => {
          return <BlogItem blog={b} />;
        })}
      </div>
    </TabsContent>
  );
};

const BlogItem = ({ blog }: any) => {
  return (
    <Link key={blog.title} to={blog.link}>
      <div className="h-full p-2.5 flex rounded-lg flex-col gap-1">
        <div className="flex justify-center items-center">
          <img className="rounded aspect-video" src={blog.image} />
        </div>
        <div className="flex justify-between h-full flex-col gap-1">
          <div>
            <h5
              className="font-semibold text-lg line-clamp-2"
              title={blog.title}
            >
              {blog.title}
            </h5>
          </div>
          <span className="text-[#6A6A6A] text-sm">{blog.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default Blogs;
