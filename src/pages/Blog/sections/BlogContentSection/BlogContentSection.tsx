import { CalendarIcon, TagIcon, UserIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { getBlogImageByIndex, getBlogThumbnailByIndex } from "../../../../utils/imageLibrary";

const blogPosts = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    excerpt: "Discover how millennial design principles are revolutionizing modern furniture. From minimalist aesthetics to sustainable materials, explore the trends that are shaping contemporary living spaces. Learn about color palettes, textures, and furniture pieces that resonate with today's design-conscious generation and create homes that reflect personal style.",
    image: getBlogImageByIndex(0),
    author: "Admin",
    date: "14 Oct 2022",
    category: "Wood",
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    excerpt: "Unlock creative decorating possibilities with innovative furniture arrangements and styling techniques. From bold statement pieces to subtle accent details, learn how to transform any space into a personalized sanctuary. Discover the art of mixing textures, layering accessories, and choosing furniture that tells your unique story.",
    image: getBlogImageByIndex(1),
    author: "Admin",
    date: "14 Oct 2022",
    category: "Handmade",
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    excerpt: "Appreciate the artistry behind handcrafted furniture pieces that showcase exceptional craftsmanship and attention to detail. Explore the traditional techniques, quality materials, and skilled artisans who create furniture designed to last generations. Learn why investing in handmade pieces adds character and authenticity to your home.",
    image: getBlogImageByIndex(2),
    author: "Admin",
    date: "14 Oct 2022",
    category: "Wood",
  },
];

const recentPosts = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
    image: getBlogThumbnailByIndex(0),
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
    image: getBlogThumbnailByIndex(1),
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
    image: getBlogThumbnailByIndex(2),
  },
  {
    id: 4,
    title: "Modern home in Milan",
    date: "03 Aug 2022",
    image: getBlogThumbnailByIndex(3),
  },
  {
    id: 5,
    title: "Colorful office redesign",
    date: "03 Aug 2022",
    image: getBlogThumbnailByIndex(4),
  },
];

const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 },
];

export const BlogContentSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-[106px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-[105px]">
          {/* Main Content */}
          <div className="flex-1">
            <div className="space-y-[54px]">
              {blogPosts.map((post) => (
                <article key={post.id} className="space-y-[17px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[500px] object-cover rounded-[10px]"
                  />
                  
                  <div className="flex items-center gap-[35px] text-[#9f9f9f]">
                    <div className="flex items-center gap-2">
                      <UserIcon className="w-4 h-4" />
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-base">
                        {post.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-base">
                        {post.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TagIcon className="w-4 h-4" />
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-base">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <h2 className="[font-family:'Poppins',Helvetica] font-medium text-black text-[30px] leading-[45px]">
                    {post.title}
                  </h2>

                  <p className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-[15px] leading-[22.5px]">
                    {post.excerpt}
                  </p>

                  <Button 
                    variant="ghost" 
                    className="[font-family:'Poppins',Helvetica] font-normal text-black text-base underline hover:bg-transparent p-0 h-auto"
                  >
                    Read more
                  </Button>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-9 mt-[77px]">
              <Button className="w-[60px] h-[60px] bg-[#b88e2f] hover:bg-[#a67d28] text-white [font-family:'Poppins',Helvetica] font-normal text-xl rounded-[10px]">
                1
              </Button>
              <Button
                variant="ghost"
                className="w-[60px] h-[60px] bg-[#f9f1e7] hover:bg-[#b88e2f] hover:text-white text-black [font-family:'Poppins',Helvetica] font-normal text-xl rounded-[10px]"
              >
                2
              </Button>
              <Button
                variant="ghost"
                className="w-[60px] h-[60px] bg-[#f9f1e7] hover:bg-[#b88e2f] hover:text-white text-black [font-family:'Poppins',Helvetica] font-normal text-xl rounded-[10px]"
              >
                3
              </Button>
              <Button
                variant="ghost"
                className="w-[98px] h-[60px] bg-[#f9f1e7] hover:bg-[#b88e2f] hover:text-white text-black [font-family:'Poppins',Helvetica] font-light text-xl rounded-[10px]"
              >
                Next
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-[393px] space-y-[43px]">
            {/* Search */}
            <Card className="border border-[#9f9f9f] rounded-[10px] shadow-none">
              <CardContent className="p-[26px]">
                <div className="relative">
                  <Input
                    placeholder=""
                    className="h-[58px] border border-[#9f9f9f] rounded-[10px] pr-12"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="shadow-none border-0">
              <CardContent className="p-0">
                <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-2xl mb-[33px]">
                  Categories
                </h3>
                <div className="space-y-[41px]">
                  {categories.map((category) => (
                    <div key={category.name} className="flex justify-between items-center">
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">
                        {category.name}
                      </span>
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card className="shadow-none border-0">
              <CardContent className="p-0">
                <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-2xl mb-[26px]">
                  Recent Posts
                </h3>
                <div className="space-y-[39px]">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-20 object-cover rounded-[10px] flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h4 className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm leading-[21px] mb-[5px]">
                          {post.title}
                        </h4>
                        <p className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-xs">
                          {post.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};