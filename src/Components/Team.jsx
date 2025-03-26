import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamView from "./TeamView";

function Team({ searchQuery, allGames }) {
    const { team = "" } = useParams();
    const [teams, setTeams] = useState({});

    useEffect(() => {
        const newTeams = {};
        allGames.forEach((game) => {
            const teamName = game.team1.toLowerCase().replace(/\s+/g, '');
            if (!newTeams[teamName]) {
                newTeams[teamName] = [];
            }
            newTeams[teamName].push(game);
        });
        setTeams(newTeams);
    }, [allGames]);

    return (
        <TeamView
            searchQuery={searchQuery}
            teamData={team ? teams[team] : allGames}
        />
    );
}

export default Team;
