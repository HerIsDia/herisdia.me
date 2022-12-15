import logoGenerated from "../logo.json";
import backgroundGenerated from "../background.json";

export const logoRandom = (): string => {
    const nbrOfImages = logoGenerated.nbrOfImages;
    const chosenImage = Math.floor(Math.random() * nbrOfImages);
    return `/logos/${logoGenerated.files[chosenImage]}`;
}

export const backgroundRandom = (): string => {
    const nbrOfImages = backgroundGenerated.nbrOfImages;
    const chosenImage = Math.floor(Math.random() * nbrOfImages);
    return `/backgrounds/${backgroundGenerated.files[chosenImage]}`;
}
