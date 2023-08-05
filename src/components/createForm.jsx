import { useState } from "react"

const CreateForm = () => {
    const [name, setName] = useState('')
    const [imageUrl, setImageUrl] = useState("https://pyxis.nymag.com/v1/imgs/8f8/e12/51b54d13d65d8ee3773ce32da03e1fa220-dogecoin.1x.rsocial.w1200.jpg")
    const [breed, setBreed] = ("")
    const [status, setStatus] = useState("")
    const [team, setTeam] = useState("unassigned")

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/players",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    imageUrl,
                    breed,
                    status,
                    team
                })
            })
            const data = await response.json()
            return data
        } catch(err) {
            console.error("Pupper Failed To be Made", err)
        }
        return (
            <section id="register">
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                <input
                    type="text"
                    placeholder="Enter Pup Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                </label>
                <label>
                    Breed
                <input
                    type="text"
                    placeholder="Enter Breed"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                />
                </label>
                <label>
                    Status
                    <input
                        type="text"
                        placeholder="Enter Bench Or Field"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    />
                </label>
                <label>
                    Team
                    <input
                        type="text"
                        placeholder="Enter Team"
                        value={team}
                        onChange={(e) => setTeam(e.target.value)}
                    />
                </label>
                <button>Create Pupper</button>
            </form>
            </section>
        )
    }
}

export default CreateForm