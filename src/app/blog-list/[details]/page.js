import BlogDetailsComponent from "@/components/blog/details";

async function fetchBlogItemDetails(getCurrentBlogItemId) {
  const response = await fetch(
    `http://localhost:3000/api/blog/blog-details?id=${getCurrentBlogItemId}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  
  const data = await response.json();

  if(data?.success) return data.data
}

export default async function BlogDetails({ params }) {
  const { details } = params;
  const blogDetails = await fetchBlogItemDetails(details)
  console.log(blogDetails);
  return (
    <div className="flex min-h-screen flex-col p-9">
      <BlogDetailsComponent blogDetails={blogDetails}/>
    </div>
  );
}
