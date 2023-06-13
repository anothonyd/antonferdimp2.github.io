import { CarProps } from "@/types";

export const calculateCarRent = (city_mpg: number, year: number) => {

    const basePricePerDay = 1899; // Base rental price per day in peso
    const mileageFactor = 5; // Additional peso rate per mile driven
    const ageFactor = 2.5; // Additional peso rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'ff5eaac0a4mshc25c2eac302eb0dp1282dfjsn2cc1e0dc7a00',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };

    const response = await fetch(
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3',
        {
            headers: headers,
        }
    );

    const result = await response.json();

    return result;
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;

    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}

// phgeralddulguimecompany