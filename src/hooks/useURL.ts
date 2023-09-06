export default function useUrl() {
    const url_name = process.env.Node_ENV === 'production' ? 'https://united-buildings-be.online' : 'http://localhost:3000';
    console.log(url_name)
    return url_name;
}