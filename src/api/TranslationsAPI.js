export const TranslationsAPI = {
    fetchTranslations(uid) {
        return fetch(`http://localhost:3000/translations?q=${uid}&_limit=10`)
            .then((response) => response.json())
            .then((data) => data);
    },
    addTranslation(options) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(options),
        };

        return fetch("http://localhost:3000/translations", requestOptions);
    },
};
