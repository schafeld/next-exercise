import { useState } from 'react';

export default function HomePage() {
    const [likes, setLikes] = useState(0);

    return (
        <div>
            <h2>This is a React component!</h2>
            <p>React is rendering this content on the client side.</p>
            <p>
                Likes: {likes !== undefined ? likes : 'Loading...'}
                <button onClick={() => setLikes(likes + 1)}>Like</button>
            </p>
        </div>
    );
}
