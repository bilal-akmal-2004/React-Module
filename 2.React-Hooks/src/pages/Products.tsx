import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface Post {
  id: number;
  title: string;
  description: string;
  images: string[],
  price: number,
}

export default function Products() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");

  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  const { theme } = themeContext;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        "https://dummyjson.com/products"
      );
      const data = await res.json();
      console.log(data.products)
      setPosts(data.products);
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <div className={`products ${theme === "light" ? "products-light" : "products-dark"}`}>
      <h2>Posts</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <p>$ {post.price}</p>
          <img src={post.images[0]} alt="" />
        </div>
      ))}
    </div>
  );
}