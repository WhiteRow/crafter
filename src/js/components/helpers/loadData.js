export default function LoadData(sidebar) {
    const dataUrl = `${location.href}/data/sidebar/${sidebar}.json`;

    try {
       return fetch(dataUrl)
            .then(response => response.json())
    } catch (error) {
        console.error(error)
    }
}