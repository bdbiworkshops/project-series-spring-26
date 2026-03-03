import { useState } from "react";

const useUser = () => {
    const [user, setUser] = useState({
        name: 'George',
        email: 'gburdell3@gatech.edu',
        totalVisits: 12,
        locations: [
            { name: 'Crosland', lastVisited: '2024-01-15', timesVisited: 5 },
            { name: 'CULC', lastVisited: '2024-01-14', timesVisited: 3 },
            { name: 'West Village', lastVisited: '2024-01-13', timesVisited: 4 },
        ]
    });

    return {
        user,
        setUser
    };
}

export default useUser;