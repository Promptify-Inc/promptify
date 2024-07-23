import { connecToDB } from "@utils/database";
import Prompt from '@models/prompt';

export const POST = async (req, res) => {
    const { userId, prompt, tag } = await req.json();

    try {
        await connecToDB();

    } catch (error) {

    }
}