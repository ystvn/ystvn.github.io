import { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example() {
    const [show, setShow] = useState(false);
    const [myTeam, setMyTeam] = useState("");
    const [otherTeam, setOtherTeam] = useState("");
    const [teamsList, setTeamsList] = useState([])
    const [date, setDate] = useState("");
    const [gameLink, setGameLink] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [errors, setErrors] = useState({
        myTeam: false,
        otherTeam: false,
        date: false,
        gameLink: false,
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch(`https://stevens-games.onrender.com/getteams`)
            .then(res => res.json())
            .then(data => {
                setTeamsList(data["games"]);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const handleGameLinkChange = (e) => {
        const link = e.target.value;
        setGameLink(link);

        // Extract YouTube video ID using a regex
        const videoIdMatch = link.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/.*v=([^&]+)|youtu\.be\/([^?&]+)/);
        const videoId = videoIdMatch ? videoIdMatch[1] || videoIdMatch[2] : null;

        // Set thumbnail if video ID is valid, otherwise clear it
        if (videoId) {
            setThumbnail(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
        } else {
            setThumbnail("");
        }
    };

    const handleCancel = () => {
        handleClose();
        setMyTeam("");
        setOtherTeam("");
        setDate("");
        setGameLink("");
        setThumbnail("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate fields
        const newErrors = {
            myTeam: myTeam.length === 0,
            otherTeam: otherTeam.length === 0,
            date: date === "",
            gameLink: gameLink === "",
        };

        setErrors(newErrors);

        // Check if any field has an error
        if (Object.values(newErrors).some((error) => error)) {
            console.log("Form has errors, cannot submit");
            return;
        }

        // Form is valid
        const gameData = {
            team1_name: myTeam,
            team2_name: otherTeam,
            game_date: date,
            youtube_link: gameLink,
        };


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
            } else {
                console.log(`Error: ${result.error}`);
            }
        } catch (error) {
            console.error("Error sending data to the API:", error);
        }

    };

    return (
        <>
            <Button className="ms-auto me-2 shadow-none" variant="warning" size="large" onClick={handleShow}>+</Button>

            <Modal show={show} onHide={handleCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Game</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>My Team</Form.Label>
                        <Typeahead
                            id="basic-typeahead-myteam"
                            labelKey="name"
                            onChange={setMyTeam}
                            options={["Auburn Kebabs", "NewJeans Elite", "LeTeam"]}
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

                        <Form.Label>Game Link</Form.Label>
                        <Form.Control
                            type="text"
                            value={gameLink}
                            onChange={handleGameLinkChange}
                            style={{
                                border: errors.gameLink ? "2px solid red" : "2px solid #D3D3D3",
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
        </>
    );
}

export default Example;