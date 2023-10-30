import axios from "axios";

export async function getFeatureItem() {
    try {
        const featureItem = await axios.get(`https://ensinio-frontend-challenge-ndrws.vercel.app/items`);

        return featureItem.data;
    } catch (error: any) {
        throw new Error(error);
    }
}