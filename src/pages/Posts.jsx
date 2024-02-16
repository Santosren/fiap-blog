import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { Layout } from "../components/Layout"
import { client } from "../lib/createClient";

export const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1); // Estado para controlar o número da página atual
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
    // Função para buscar posts com paginação
    const post_limit = 3;

    const fetchPosts = async () => {
        const response = await client.getEntries({
            content_type: 'blogPost',
            limit: post_limit, // Limite de itens por página
            skip: (page - 1) * post_limit, // N de itens para ignorar
            order: "-sys.createdAt"
        });
        console.log('posts', response.items);
        setPosts(response.items);
        setTotalPages(Math.ceil(response.total / post_limit)); // N total de páginas
    };

        fetchPosts();
    }, [page]); // Executar sempre que a página mudar

    const goToPreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const goToNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    return (
        <Layout>      
            <div className="container-fluid">
                <div className="row">
                    <main className="col-md-12">
                        <h1 className="my-3 text-center">Todos os Posts</h1>

                        {posts.map(post => (
                            <div className="card mb-3" key={post.sys.id}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">{post.fields.title}</h5>
                                    <p className="card-text text-center">{post.fields.description}</p>
                                </div>
                            </div>
                        ))}
                       
                       <div className="text-center">
                            <button className="btn btn-primary" onClick={goToPreviousPage}>Página Anterior</button>
                            <span className="mx-2">Página {page} de {totalPages}</span>
                            <button className="btn btn-primary" onClick={goToNextPage}>Próxima Página</button>
                        </div>

                        <div className="text-left">
                            <a href="/" className='btn btn-primary'>
                                <Link to="/" style={{ color: 'white', fontWeight: 'bold' }}>
                                    Voltar para Home
                                </Link>
                            </a>
                        </div>
                    </main>
                </div>
            </div>
        </Layout>
    )}