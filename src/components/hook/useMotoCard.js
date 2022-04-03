import { useEffect, useState } from "react"

const useMotoCard = () => {

    const [moto, setMoto] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setMoto(data))
    }, []);
    return [moto, setMoto];
}

export default useMotoCard;