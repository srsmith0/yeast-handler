//TODO: add yeast id dynamically to address

import { useRouter } from "next/router";

const YeastDetails = () => {
    const router = useRouter();
    const yeastData = router.query;

    return yeastData.strain
};

export default YeastDetails;