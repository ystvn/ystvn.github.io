import { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddGameBox() {
    // Add Games
    const [show, setShow] = useState(false);
    const [myTeam, setMyTeam] = useState([]);
    const [otherTeam, setOtherTeam] = useState([]);
    const [teamsList, setTeamsList] = useState([])
    const [date, setDate] = useState("");
    const [gameLink, setGameLink] = useState("");
    const [gameScore, setGameScore] = useState("")
    const [myTeamScore, setMyTeamScore] = useState(0)
    const [otherTeamScore, setOtherTeamScore] = useState(0)
    const [thumbnail, setThumbnail] = useState("");
    const [errors, setErrors] = useState({
        myTeam: false,
        otherTeam: false,
        date: false,
        gameLink: false,
        gameScore: false
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch(`https://stevens-games.onrender.com/getteams`)
            .then(res => res.json())
            .then(data => {
                const filteredTeams = data["games"].filter(
                    team => !["AUBURN KEBABS", "NEWJEANS ELITE", "LETEAM"].includes(team)
                );
                setTeamsList(filteredTeams);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const handleGameLinkChange = async (e) => {
        const link = e.target.value;
        setGameLink(link);

        // Extract YouTube video ID using a regex
        const videoIdMatch = link.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/.*v=([^&]+)|youtu\.be\/([^?&]+)/);
        const videoId = videoIdMatch ? videoIdMatch[1] || videoIdMatch[2] : null;

        if (videoId) {
            try {
                await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`)
                    .then(res => res.json())
                    .then(data => {
                        if (!data.error) {

                            setMyTeam([(data.title).match(/^(.*)(?= vs)/)[0]]);
                            setOtherTeam([(data.title).match(/(?<=vs\s)(.*?)(?=\s\d{1,2}\/\d{1,2}\/\d{4})/)[0]]);

                            if ((data.title).match(/\d{1,2}\/\d{1,2}\/\d{4}/)) {
                                const [day, month, year] = (data.title).match(/\d{1,2}\/\d{1,2}\/\d{4}/)[0].split('/');
                                const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
                                setDate(formattedDate);
                            } else {
                                console.log("Date not found");
                            }
                        }

                        setThumbnail(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
                    })
                    .catch();
            } catch (error) {
                console.error("Error sending data to the API:", error);
            }

        } else {
            setThumbnail("");
        }
    };

    const handleScoreChange = async (e) => {
        const score = e.target.value;
        setGameScore(score)
        setMyTeamScore(score.match(/(^\d+)/))
        setOtherTeamScore(score.match(/(\d+$)/))
    }

    const handleCancel = () => {
        handleClose();
        setMyTeam("");
        setOtherTeam("");
        setDate("");
        setGameLink("");
        setGameScore("");
        setMyTeamScore("")
        setOtherTeamScore("")
        setThumbnail("");
        enteredPassword("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate fields
        const newErrors = {
            myTeam: myTeam.length === 0,
            otherTeam: otherTeam.length === 0,
            date: date === "",
            gameLink: gameLink === "",
            gameScore: gameScore === ""
        };

        setErrors(newErrors);

        // Check if any field has an error
        if (Object.values(newErrors).some((error) => error)) {
            console.log("Form has errors, cannot submit");
            return;
        }

        openAuth();
        handleClose();
    };

    // Authentication
    const [showAuth, setShowAuth] = useState(false)
    const [password, enteredPassword] = useState('')
    const [correct, isCorrect] = useState(false)

    const openAuth = () => setShowAuth(true);
    const closeAuth = () => {
        handleCancel();
        setShowAuth(false);
    };

    const handleAuth = async (e) => {
        fetch(`https://stevens-games.onrender.com/checkpassword/?password=${password}`)
            .then(res => res.json())
            .then(data => {
                isCorrect(data.correctPassword)
            })
            .catch(error => console.error("Error fetching data:", error));

        if (!correct) {
            return;
        }

        const gameData = {
            team1_name: myTeam[0],
            team2_name: otherTeam[0],
            game_date: date,
            youtube_link: gameLink,
            team1_score: myTeamScore[0],
            team2_score: otherTeamScore[0]
        };

        closeAuth();
        try {
            const response = await fetch("https://stevens-games.onrender.com/addgame", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(gameData),
            });

            const result = await response.json();

            if (response.ok) {
                console.log("Game added successfully!");

                const cachedData = localStorage.getItem(`team-${myTeam[0]}`);
                if (cachedData) {
                    const updatedData = JSON.parse(cachedData);
                    updatedData.games.push(gameData);
                    localStorage.setItem(`team-${myTeam[0]}`, JSON.stringify(updatedData));
                }
            } else {
                console.log(`Error: ${result.error}`);
            }
        } catch (error) {
            console.error("Error sending data to the API:", error);
        }
    }

    return (
        <>
            <Button className="ms-auto me-2 shadow-none" variant="warning" size="large" onClick={handleShow}>+</Button>

            {/* Adding Games */}
            <Modal show={show} onHide={handleCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Game</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Game Link (e.g. www.youtube.com/watch?v=mbR0vVUrIoY)</Form.Label>
                        <Form.Control
                            type="text"
                            value={gameLink}
                            onChange={handleGameLinkChange}
                            style={{
                                border: errors.gameLink ? "2px solid red" : "2px solid #D3D3D3",
                                borderRadius: "8px",
                            }}

                        />
                        <Form.Label>My Team</Form.Label>
                        <Typeahead
                            id="basic-typeahead-myteam"
                            labelKey="name"
                            onChange={setMyTeam}
                            options={["AUBURN KEBABS", "NEWJEANS ELITE", "LETEAM"]}
                            selected={myTeam}
                            style={{
                                border: errors.myTeam ? "2px solid red" : "2px solid #D3D3D3",
                                borderRadius: "8px",
                            }}
                        />

                        <Form.Label>Their Team</Form.Label>
                        <Typeahead
                            id="basic-typeahead-otherteam"
                            labelKey="name"
                            onChange={setOtherTeam}
                            options={teamsList ? teamsList : []}
                            selected={otherTeam}
                            allowNew
                            newSelectionPrefix="Add a new team: "
                            style={{
                                border: errors.otherTeam ? "2px solid red" : "2px solid #D3D3D3",
                                borderRadius: "8px",
                            }}
                        />

                        <Form.Label>Score (e.g. 49 - 48)</Form.Label>
                        <Form.Control
                            type="text"
                            value={gameScore}
                            onChange={handleScoreChange}
                            style={{
                                border: errors.gameLink ? "2px solid red" : "2px solid #D3D3D3",
                                borderRadius: "8px",
                            }}

                        />

                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            style={{
                                border: errors.date ? "2px solid red" : "2px solid #D3D3D3",
                                borderRadius: "8px",
                            }}
                        />
                        <br />
                        {thumbnail && (
                            <div className="mt-2">
                                <img
                                    src={thumbnail}
                                    alt="YouTube Thumbnail"
                                    style={{ maxWidth: "100%", borderRadius: "8px" }}
                                />
                            </div>
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add Game
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Authenticator */}
            <Modal show={showAuth} onHide={closeAuth}>
                <Modal.Header closeButton>
                    <Modal.Title>Authentication</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => enteredPassword(e.target.value)}
                            style={{
                                border: correct ? "2px solid #D3D3D3" : "2px solid red",
                                borderRadius: "8px",
                            }}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeAuth}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAuth}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    );
}


export default AddGameBox;