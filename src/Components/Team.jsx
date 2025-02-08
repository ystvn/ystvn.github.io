import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamView from "./TeamView";

function Team({ searchQuery }) {
    const { team = "" } = useParams();
    const [teams, setTeams] = useState({ "auburnkebabs": [], "leteam": [], "newjeanselite": [] })
    const [allGames, setAllGames] = useState([])

    useEffect(() => {
        fetch("https://stevens-games.onrender.com/")
            .then((res) => res.json())
            .then((fetchedData) => {
                setAllGames(fetchedData.games)
                const newTeams = {};

                fetchedData.games.forEach((game) => {
                    const teamName = game.team1.toLowerCase().replace(/\s+/g, '');
                    if (!newTeams[teamName]) {
                        newTeams[teamName] = [];
                    }
                    newTeams[teamName].push(game);
                });

                setTeams(newTeams);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <TeamView
            searchQuery={searchQuery}
            teamData={(team ? teams[team] : allGames)}
        />
    )
}

export default Team;