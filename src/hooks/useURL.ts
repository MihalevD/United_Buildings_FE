export default function useUrl() {
    console.log(import.meta.env.VITE_NODE_ENV)
    const url_name = import.meta.env.VITE_NODE_ENV === 'production' ? 'https://united-buildings-be.online' : 'http://localhost:3000';
    console.log(url_name)
    return url_name;
}