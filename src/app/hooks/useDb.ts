import { useState } from "react";

const useDb = () => {
    const [db, setDb] = useState({
        "users": [
            {
                "name": "Jean",
                "email": "jbone3@gatech.edu",
                "points": 120,
                "locations": [
                    { "name": "Crosland Tower", "lastVisited": "2024-01-15" },
                    { "name": "CULC", "lastVisited": "2024-01-14" },
                    { "name": "West Village Dining Commons", "lastVisited": "2024-01-13" }
                ]
            },
            {
                "name": "Marcus",
                "email": "mlee47@gatech.edu",
                "points": 70,
                "locations": [
                    { "name": "Klaus Advanced Computing Building", "lastVisited": "2024-01-12" },
                    { "name": "CULC", "lastVisited": "2024-01-10" }
                ]
            },
            {
                "name": "Aisha",
                "email": "apatel89@gatech.edu",
                "points": 90,
                "locations": [
                    { "name": "West Village Dining Commons", "lastVisited": "2024-01-16" },
                    { "name": "Tech Green", "lastVisited": "2024-01-11" }
                ]
            },
            {
                "name": "Daniel",
                "email": "dkim22@gatech.edu",
                "points": 60,
                "locations": [
                    { "name": "Klaus Advanced Computing Building", "lastVisited": "2024-01-15" },
                    { "name": "CODA", "lastVisited": "2024-01-09" }
                ]
            }
        ],
        "locations": [
            {
                "name": "CULC",
                "category": "education",
                "points": 30,
                "usersVisited": [
                    "904676767",
                    "903112445"
                ]
            },
            {
                "name": "Crosland Tower",
                "category": "education",
                "points": 40,
                "usersVisited": [
                    "904676767"
                ]
            },
            {
                "name": "West Village Dining Commons",
                "category": "food",
                "points": 50,
                "usersVisited": [
                    "904676767",
                    "902334556"
                ]
            },
            {
                "name": "Klaus Advanced Computing Building",
                "category": "research",
                "points": 40,
                "usersVisited": [
                    "903112445",
                    "901998234"
                ]
            },
            {
                "name": "Tech Green",
                "category": "entertainment",
                "points": 40,
                "usersVisited": [
                    "902334556"
                ]
            },
            {
                "name": "CODA",
                "category": "research",
                "points": 20,
                "usersVisited": [
                    "901998234"
                ]
            }
        ]
    });

    return { db, setDb };
}

export default useDb;