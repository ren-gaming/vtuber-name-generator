const data = {
  cute: {
    prefixes: ["Luna", "Mimi", "Koko", "Suki", "Nana", "aka"],
    suffixes: ["bunny", "paws", "sparkle", "milk", "cloud", "chan"],
    themes: ["Pastel Pink", "Soft Blue", "Cream White", "Celestia", "Flora"],
    styles: ["Cozy streaming", "ASMR", "Gaming chill"],
    traits: ["Shy but chaotic", "Overly energetic", "Sweet but unhinged"]
  },

  dark: {
    prefixes: ["Vex", "Kuro", "Nyx", "Raven", "Zero"],
    suffixes: ["shade", "void", "blood", "veil", "night"],
    themes: ["Black & Red", "Purple Neon", "Dark Grey"],
    styles: ["Horror games", "Deep lore streams", "Chaos gaming"],
    traits: ["Mysterious", "Cold but funny", "Dark humor chaos"]
  },

  cyber: {
    prefixes: ["Neo", "Xen", "Cyber", "Astra", "Volt"],
    suffixes: ["byte", "core", "link", "drive", "net"],
    themes: ["Neon Blue", "Electric Green", "Glitch Pink"],
    styles: ["Tech reviews", "Cyber gaming", "VR streams"],
    traits: ["Tech obsessed", "Glitchy personality", "Hyper analytical"]
  },

  fantasy: {
    prefixes: ["Astra", "Elio", "Lyria", "Fen", "Aria"],
    suffixes: ["wind", "flame", "star", "moon", "blade"],
    themes: ["Magic Gold", "Royal Purple", "Forest Green"],
    styles: ["RPG adventures", "Storytelling", "Fantasy roleplay"],
    traits: ["Storyteller", "Calm and wise", "Magical chaos gremlin"]
  }
};

const animals = {
  cat: ["Cat ears", "Feline reflexes", "Purring voice"],
  fox: ["Fox ears", "Trickster nature", "Sharp instincts"],
  wolf: ["Wolf ears", "Pack loyalty", "Howl voice effect"],
  bunny: ["Bunny ears", "Hyper energy", "Soft voice"],
  dragon: ["Dragon horns", "Fire aura", "Ancient power"]
};

// helper function
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// main generator
function generateVTuber() {
  const style = document.getElementById("styleSelect").value;
  const animalChoice = document.getElementById("animalSelect").value;

  const set = data[style];

  const name = pick(set.prefixes) + " " + pick(set.suffixes);

  // animal system
  let animalText = "";

  if (animalChoice === "random") {
    const keys = Object.keys(animals);
    const randomAnimal = pick(keys);
    animalText = pick(animals[randomAnimal]);
  } else if (animalChoice !== "none") {
    animalText = pick(animals[animalChoice]);
  }

  // update UI
  document.getElementById("name").innerText = "🌟 " + name;
  document.getElementById("theme").innerText = "Theme: " + pick(set.themes);
  document.getElementById("style").innerText = "Streaming Style: " + pick(set.styles);

  document.getElementById("personality").innerText =
    "Personality: " + pick(set.traits) +
    (animalText ? " | Hybrid: " + animalText : "");
}

// download card as image
function downloadCard() {
  const card = document.getElementById("card");

  html2canvas(card).then(canvas => {
    const link = document.createElement("a");
    link.download = "vtuber-id-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
