import { VercelRequest, VercelResponse } from "@vercel/node";

import { shopItems } from "../data/shop";

export default (req: VercelRequest, res: VercelResponse) => {
    return res.json({
        data: shopItems
    });
};