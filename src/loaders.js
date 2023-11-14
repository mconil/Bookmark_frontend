
const URL = "https://djangobookmark.onrender.com/bookmark"


export const indexLoader = async () => {
    const response = await fetch(URL + "/");
    const bookmarks = await response.json()
    return bookmarks;
}


export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/${params.id}/`)
    const bookmark = await response.json()
    return bookmark;
}