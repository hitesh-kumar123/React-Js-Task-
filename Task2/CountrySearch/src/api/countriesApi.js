

const API_URL = 'https://restcountries.com/v3.1/all?fields=name,flags,cca3,region,borders,independent';

export const getCountries = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw error;
    }
}