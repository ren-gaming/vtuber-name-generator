const data = {
  cute: {
    prefixes: ["Luna", "Mimi", "Koko", "Suki", "Nana"],
    suffixes: ["bunny", "paws", "sparkle", "milk", "cloud"],
    themes: ["Pastel Pink", "Soft Blue", "Cream White"],
    styles: ["Cozy streaming", "ASMR", "Gaming chill"]
  },

  dark: {
    prefixes: ["Vex", "Kuro", "Nyx", "Raven", "Zero"],
    suffixes: ["shade", "void", "blood", "veil", "night"],
    themes: ["Black & Red", "Purple Neon", "Dark Grey"],
    styles: ["Horror games", "Deep lore streams", "Chaos gaming"]
  },

  cyber: {
    prefixes: ["Neo", "Xen", "Cyber", "Astra", "Volt"],
    suffixes: ["byte", "core", "link", "drive", "net"],
    themes: ["Neon Blue", "Electric Green", "Glitch Pink"],
    styles: ["Tech reviews", "Cyber gaming", "VR streams"]
  },

  fantasy: {
    prefixes: ["Astra", "Elio", "Lyria", "Fen", "Aria"],
    suffixes: ["wind", "flame", "star", "moon", "blade"],
    themes: ["Magic Gold", "Royal Purple", "Forest Green"],
    styles: ["RPG adventures", "Storytelling", "Fantasy roleplay"]
  }
};

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateVTuber() {
  const style = document.getElementById("styleSelect").value;
  const set = data[style];

  const name = pick(set.prefixes) + " " + pick(set.suffixes);

  const identity = {
    name: name,
    themeColor: pick(set.themes),
    streamingStyle: pick(set.styles),
    personality: generatePersonality(style)
  };

  document.getElementById("result").innerText =
`🌟 VTuber Identity Generated 🌟

Name: ${identity.name}
Theme: ${identity.themeColor}
Style: ${identity.streamingStyle}
Personality: ${identity.personality}`;
}

function generatePersonality(style) {
  const traits = {
    cute: ["Shy but chaotic", "Overly energetic", "Sweet but unhinged"],
    dark: ["Mysterious", "Cold but funny", "Dark humor chaos"],
    cyber: ["Tech obsessed", "Glitchy personality", "Hyper analytical"],
    fantasy: ["Storyteller", "Calm and wise", "Magical chaos gremlin"]
  };

  return pick(traits[style]);
}