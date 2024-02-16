import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { Layout } from "../components/Layout"
import { client } from "../lib/createClient";

export const Home = () => {
    const [categories, setCategories] = useState([]); // retorna um array
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // Pedir para o objeto client buscar os últimos 5 posts
        client
            .getEntries({
                content_type: 'blogPost',
                limit: 5,
                order: "-sys.createdAt"
            })
            .then(function (entries) {
                console.log('posts', entries.items);
                setPosts(entries.items);
            });

        // Pedir para o objeto client buscar todas as categorias
        client
            .getEntries({
                content_type: 'blogCategory',
            })
            .then(function (entries) {
                console.log('categorias', entries.items);
                setCategories(entries.items);
            });
    }, []); // array vazio indica o onload do componente

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <main className="col-md-8">
                        <h1 className="my-3">Últimos posts</h1>

                        {posts.map(post => (
                            <div className="card mb-3" key={post.sys.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{post.fields.title}</h5>
                                    <p className="card-text">{post.fields.description}</p>
                                </div>
                            </div>
                        ))}
                       
                        <a href="#" className='btn btn-primary'>
                            <Link to="/posts" style={{ color: 'white', fontWeight: 'bold' }}>
                                Ver todos os posts
                            </Link>
                        </a>
                    </main>
               
                    <aside className="col-md-4">
                        <h2>Categorias</h2>
                        <ul>
                            {categories.map(category => (
                            <li className="category-title">
                                <a href={`${category.fields.categorySlug}`}>
                                {category.fields.categoryTitle}
                                </a>
                                </li>
                        ))}
                        </ul>
                    </aside>
                </div>
            </div>
        </Layout>
    )
}