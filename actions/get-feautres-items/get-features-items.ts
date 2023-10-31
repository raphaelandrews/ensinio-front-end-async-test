import axios from "axios";

export async function getFeatureItem() {
    try {
        const featureItem = await axios.get("https://fake-api-ndrws.onrender.com/items");

        return featureItem.data;
    } catch (error: any) {
        throw new Error(error);
    }
}