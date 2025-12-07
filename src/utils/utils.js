
export function getHeartLostMessage() {
    const options = [
        `The noose tightens...`,
        `Another step closer to doom`,
        `Hope fades with each mistake`,
        `Death draws nearer`,
        `The rope creaks ominously`,
        `Your fate is sealed with each error`,
        `The gallows await`,
        `Time is running out`,
        `The end approaches`,
        `Darkness closes in`,
        `Another life slips away`,
        `The reaper smiles`
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}