const React = window.React;
const { useState } = React;

const ScienceQuestPlatform = () => {
  const [gameState, setGameState] = useState('start');
  const [currentScene, setCurrentScene] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [completedMissions, setCompletedMissions] = useState([]);

  // Module definitions with Oregon learning standards
  const modules = {
    matter: {
      name: 'Matter & Properties',
      emoji: '⚛️',
      color: 'from-blue-600 to-cyan-500',
      accent: 'blue',
      description: 'Particles, properties, mixing, and conservation of matter',
      standards: ['ALT 1', 'ALT 2', 'ALT 3', 'ALT 4']
    },
    motion: {
      name: 'Motion & Forces',
      emoji: '⚡',
      color: 'from-purple-600 to-pink-500',
      accent: 'purple',
      description: 'Forces, gravity, and motion',
      standards: ['ALT 5']
    },
    energy: {
      name: 'Energy & Life',
      emoji: '🌞',
      color: 'from-yellow-600 to-orange-500',
      accent: 'yellow',
      description: 'Energy from the sun, food webs, and photosynthesis',
      standards: ['ALT 6', 'ALT 7', 'ALT 8']
    },
    earth: {
      name: 'Earth & Space',
      emoji: '🌍',
      color: 'from-emerald-600 to-teal-500',
      accent: 'emerald',
      description: 'Water, atmosphere, stars, and Earth systems',
      standards: ['ALT 9', 'ALT 10', 'ALT 11', 'ALT 12']
    },
    engineering: {
      name: 'Engineering Design',
      emoji: '🛠️',
      color: 'from-red-600 to-rose-500',
      accent: 'red',
      description: 'Design problems, solutions, and testing',
      standards: ['ALT 14', 'ALT 15', 'ALT 16']
    },
    human: {
      name: 'Earth & Humans',
      emoji: '🌿',
      color: 'from-green-600 to-lime-500',
      accent: 'green',
      description: 'Protecting Earth\'s resources and environment',
      standards: ['ALT 13']
    }
  };

  const scenes = {
    // ===== START SCREEN =====
    start: {
      title: "🔬 Welcome to Science Quest",
      subtitle: "Learn How Science Really Works",
      text: `You're about to become a real scientist. Not someone who memorizes facts—but someone who ASKS QUESTIONS, DESIGNS EXPERIMENTS, and LEARNS FROM DATA.

In each mission, you'll:
✓ Investigate real-world mysteries
✓ Design experiments with controlled variables
✓ Collect and analyze data
✓ Draw conclusions from evidence
✓ Communicate your findings

This is exactly how scientists work in labs, universities, and research centers around the world.

**Choose a module to begin your scientific journey:**`,
      isIntro: true
    },

    // ===== MATTER MODULE =====
    matterIntro: {
      module: 'matter',
      title: "⚛️ Matter & Properties Module",
      text: `Everything around you is made of MATTER—stuff you can touch, see, and measure.

In this module, you'll investigate:
- What matter is really made of (tiny particles!)
- How to identify materials by their properties
- What happens when you mix substances
- Why matter never just disappears

Let's start with a mystery...`,
      choices: [
        { text: 'Mission 1: Are Particles Real? (ALT 1)', nextScene: 'particlesMission', isCorrect: true },
        { text: 'Mission 2: Mysterious Weight Mystery (ALT 2)', nextScene: 'weightMission', isCorrect: true },
        { text: 'Mission 3: Identify the Unknown Materials (ALT 3)', nextScene: 'materialsMission', isCorrect: true },
        { text: 'Mission 4: What Happens When We Mix? (ALT 4)', nextScene: 'mixingMission', isCorrect: true },
        { text: 'Return to Module Selection', nextScene: 'moduleSelect', isCorrect: true }
      ]
    },

    particlesMission: {
      module: 'matter',
      standard: 'ALT 1',
      title: "⚛️ Mission 1: Are Particles Real?",
      subtitle: "Matter - Small Particles",
      text: `You notice something strange: A drop of food coloring in water spreads out and colors the entire glass, even though you only added it in one spot.

Your teacher asks: "If we keep dividing that food coloring drop smaller and smaller, will we ever reach something SO SMALL we can't divide it anymore?"

This is about ATOMIC THEORY—the idea that matter is made of tiny particles too small to see.

**Your investigation question:** What evidence suggests matter is made of invisible particles?

Let's design a series of observations and experiments to explore this:`,
      choices: [
        { text: 'Test 1: How far does food coloring spread? Test 2: Can we separate salt from water? Test 3: Does sugar disappear in water?', nextScene: 'particlesExperiment', isCorrect: true, feedback: 'Excellent! These observations will show particle behavior:\n- Food coloring spreads = dye particles mixing\n- Salt separation = particles reforming\n- Dissolving sugar = particles dispersing but still existing\n\nThis is how we infer the particle model!' },
        { text: 'Just look at it under a microscope', nextScene: 'particlesExperiment', isCorrect: false, feedback: 'Atoms are WAY too small for regular microscopes! We infer their existence through observable evidence and behavior, not direct observation. Let\'s gather that evidence.' }
      ]
    },

    particlesExperiment: {
      module: 'matter',
      standard: 'ALT 1',
      title: "🔬 Particle Evidence Experiments",
      text: `**Experiment 1: Food Coloring Diffusion**
Setup: Drop one drop of red food coloring in a glass of water
Observation: The color spreads throughout the entire glass in minutes, even without stirring
Why this matters: The dye particles are moving randomly through water particles

**Experiment 2: Salt in Water**
Setup: Mix salt in water until it dissolves completely (invisible). Heat the water to evaporate it.
Observation: Salt crystals reappear! The salt particles were there the whole time, just separated by water particles
Why this matters: Particles don't disappear—they just get separated and mixed

**Experiment 3: Sugar Dissolving**
Setup: Dissolve sugar in water. Taste it. It's sweet everywhere in the glass.
Observation: Sugar particles spread throughout and can't be seen, but we detect them through taste
Why this matters: Even when we can't see something, we know particles are there based on its effects

**Your conclusion:**`,
      choices: [
        { text: 'Matter is made of tiny particles that are too small to see, but we can observe their behavior and effects. These particles spread, mix, and can be separated but never disappear.', nextScene: 'particlesConclusion', isCorrect: true, feedback: 'PERFECT! You\'ve built the atomic model from observations. This is exactly how scientists developed atomic theory—through careful observation of matter behavior!' },
        { text: 'Food coloring, salt, and sugar are different things so we can\'t draw conclusions', nextScene: 'particlesConclusion', isCorrect: false, feedback: 'Actually, testing DIFFERENT substances and seeing SIMILAR patterns is how we build big ideas. The fact that all matter behaves this way supports particle theory!' }
      ]
    },

    particlesConclusion: {
      module: 'matter',
      standard: 'ALT 1',
      title: "✅ ALT 1 Complete: Particles Exist!",
      text: `**What You've Discovered:**

You've built a scientific model—a description of how something works based on observations and evidence. The particle model of matter says:

1. All matter is made of particles
2. Particles are too small to see with our eyes
3. Particles move and spread through space
4. Particles can be separated or combined but never created or destroyed

**This is 500+ years of scientific progress!** From the 1600s onward, scientists used observations to build this model. You just did the same thing.

**Real Science Connection:**
Modern physicists study particles using electron microscopes and particle accelerators. But even they started with observations of how matter behaves!

**What you learned:**
✓ How scientists use evidence to build models
✓ That we can infer invisible things through their effects
✓ The particle model of matter
✓ How to design experiments that test a theory

Ready for the next mystery?`,
      choices: [
        { text: 'Mission 2: Mysterious Weight Mystery (ALT 2)', nextScene: 'weightMission', isCorrect: true },
        { text: 'Try a different mission', nextScene: 'matterIntro', isCorrect: true },
        { text: 'Return to Module Selection', nextScene: 'moduleSelect', isCorrect: true }
      ]
    },

    weightMission: {
      module: 'matter',
      standard: 'ALT 2',
      title: "⚖️ Mission 2: Conservation of Matter",
      subtitle: "The Weight Mystery",
      text: `Your friend heats an ice cube. After it melts into water, they check the weight: Still the same!

Then they heat the water and it evaporates into steam. Your friend says: "The water disappeared! The weight must have gone away too!"

But you wonder... Did the water really disappear? Or did it just change?

**Investigation Question:** When matter changes (melting, freezing, evaporating, mixing), does the total weight stay the same or change?

This is the LAW OF CONSERVATION OF MATTER—one of the most important laws in science.

Let's test it:`,
      choices: [
        { text: 'Test 1: Ice → Water. Test 2: Water → Steam (collect it). Test 3: Mix substances and measure total weight.', nextScene: 'weightExperiment', isCorrect: true, feedback: 'Perfect! You\'re going to TEST whether weight is conserved during state changes AND mixing. This is the experimental approach to a fundamental law!' },
        { text: 'Just assume weight is conserved because you learned it in class', nextScene: 'weightExperiment', isCorrect: false, feedback: 'No way! Scientists DON\'T assume—they TEST. Let\'s gather data and prove it. That\'s the whole point of the scientific method!' }
      ]
    },

    weightExperiment: {
      module: 'matter',
      standard: 'ALT 2',
      title: "📊 Weight Conservation Tests",
      text: `**Experiment 1: Ice Melting**
- Ice cube weight: 50 grams
- After melting to water: 50 grams
- Conclusion: No weight lost! The water is still there.

**Experiment 2: Water Evaporation**
Setup: Use a closed container to trap steam
- Water weight: 100 grams
- After heating (in sealed container): 100 grams (water vapor in the air)
- If we let it escape: Seems to disappear, but it's just in the air now
- Conclusion: The water didn't disappear—it changed form but weight is conserved!

**Experiment 3: Mixing Substances**
- Salt: 10 grams
- Water: 90 grams
- Salt water: 100 grams
- Conclusion: When we mix, nothing gets lost!

**Your analysis:**`,
      choices: [
        { text: 'In EVERY case, the total weight stayed exactly the same. Matter changes form and mixes, but weight is always conserved. This is a law of nature.', nextScene: 'weightConclusion', isCorrect: true, feedback: 'EXCELLENT! You\'ve discovered the Law of Conservation of Matter through experimentation. This is why we can trust scientific laws—they\'re tested over and over with consistent results!' },
        { text: 'Weight changes slightly due to measurement error', nextScene: 'weightConclusion', isCorrect: false, feedback: 'With careful measurement, weight is conserved exactly. Small measurement errors happen, but the PATTERN is clear—weight is always conserved, not just mostly.' }
      ]
    },

    weightConclusion: {
      module: 'matter',
      standard: 'ALT 2',
      title: "✅ ALT 2 Complete: Matter is Conserved!",
      text: `**The Law of Conservation of Matter:**

Matter cannot be created or destroyed. It can:
- Change state (solid → liquid → gas)
- Mix with other matter
- Combine chemically
- Break apart

But the total amount of matter (weight) NEVER changes.

**Why this matters:**
✓ Helps us track energy in chemical reactions
✓ Explains why burning something doesn't make it vanish
✓ Shows that matter is fundamentally stable
✓ One of the foundational laws of physics and chemistry

**Real World:** When you burn wood, the wood doesn't disappear—it becomes ash + smoke + gases. If you weighed the ash AND collected all the gases, the total would equal the original wood weight!

**What you learned:**
✓ How to measure and graph quantities
✓ How to test a hypothesis through experiments
✓ The Law of Conservation of Matter
✓ That data proves scientific laws

Ready for more?`,
      choices: [
        { text: 'Mission 3: Identify Materials by Properties (ALT 3)', nextScene: 'materialsMission', isCorrect: true },
        { text: 'Try a different mission', nextScene: 'matterIntro', isCorrect: true }
      ]
    },

    materialsMission: {
      module: 'matter',
      standard: 'ALT 3',
      title: "🔍 Mission 3: Identify Unknown Materials",
      subtitle: "Matter - Properties",
      text: `A recycling center has a bin of unlabeled plastic pieces. Some are recyclable (#1 and #2 plastic), some are not. If they mix recyclables with non-recyclables, the whole batch gets contaminated.

They need YOU to identify which plastics are which using ONLY OBSERVATIONS AND MEASUREMENTS.

You can't just look at them—you need to TEST their properties:
- Density (does it float or sink?)
- Flexibility (does it bend or break?)
- Melting point (heat sensitivity)
- Transparency (clear or opaque?)
- Appearance (smooth, rough, color)

**Your investigation:** What properties can we measure and observe to identify different plastic types?`,
      choices: [
        { text: 'Design tests for: density (water), flexibility (bend test), appearance, transparency. Create a property chart.', nextScene: 'materialsExperiment', isCorrect: true, feedback: 'Brilliant! You\'ve identified testable, observable properties. This is exactly how scientists identify unknown substances—by measuring and comparing properties!' },
        { text: 'Just guess based on how they look', nextScene: 'materialsExperiment', isCorrect: false, feedback: 'Scientists don\'t guess! We measure and test. Design experiments for each property and build a data table to identify materials systematically.' }
      ]
    },

    materialsExperiment: {
      module: 'matter',
      standard: 'ALT 3',
      title: "🧪 Material Property Testing Lab",
      text: `**You test three plastic samples:**

**Sample A:**
- Floats in water (low density)
- Flexes easily without breaking (flexible)
- Clear/transparent
- Melts at lower temperature (~230°F)
- Smooth surface
- Known property chart for #1 plastic matches!

**Sample B:**
- Sinks in water (higher density)
- Rigid (doesn't flex much)
- Opaque white
- Melts at higher temperature (~340°F)
- Slightly textured surface
- Matches #2 plastic chart!

**Sample C:**
- Floats in water
- Very rigid (breaks if bent hard)
- Opaque
- Unclear melting point
- Soft texture
- Doesn't match either #1 or #2—not recyclable!

**Your identification:**`,
      choices: [
        { text: 'Sample A = #1 plastic (recyclable), Sample B = #2 plastic (recyclable), Sample C = non-recyclable. Properties measured: density, flexibility, appearance, melting point.', nextScene: 'materialsConclusion', isCorrect: true, feedback: 'PERFECT identification! You used systematic property testing to identify materials. This is exactly what material scientists and recyclers do!' }
      ]
    },

    materialsConclusion: {
      module: 'matter',
      standard: 'ALT 3',
      title: "✅ ALT 3 Complete: Material Properties Work!",
      text: `**What You've Discovered:**

Every material has unique PROPERTIES—characteristics you can measure and observe:
- Density (weight compared to volume)
- Flexibility (how it bends)
- Melting point (temperature it melts)
- Transparency (clear vs. opaque)
- Texture, color, hardness, conductivity...

By measuring these properties, we can:
✓ Identify unknown substances
✓ Choose the right material for a job
✓ Sort and recycle materials
✓ Develop new materials with specific properties

**Real World:** Recycling centers, factories, and scientists use property testing every day to identify and sort materials!

**What you learned:**
✓ How to observe and measure properties
✓ How to create property charts for identification
✓ That every material has unique characteristics
✓ How to systematically test unknowns

Ready for the mixing mystery?`,
      choices: [
        { text: 'Mission 4: Mixing Substances (ALT 4)', nextScene: 'mixingMission', isCorrect: true },
        { text: 'Try a different mission', nextScene: 'matterIntro', isCorrect: true }
      ]
    },

    mixingMission: {
      module: 'matter',
      standard: 'ALT 4',
      title: "🧪 Mission 4: Do Mixtures Create New Substances?",
      subtitle: "Mixing Substances - Chemical vs. Physical Change",
      text: `In a science lab, a student mixes two clear liquids:
- Liquid A (calcium hydroxide solution - clear, colorless)
- Liquid B (sodium carbonate solution - clear, colorless)

They mix them together... and a WHITE SOLID suddenly appears!

The student wonders: "Did we create a NEW substance, or just rearrange what was already there?"

This is the difference between:
- PHYSICAL CHANGE: Rearranging (mixing, melting, dissolving)—no new substance
- CHEMICAL CHANGE: Creating new substance (burning, rusting, reacting)—new properties!

**Your investigation:** When two substances mix, how can we tell if a new substance formed?`,
      choices: [
        { text: 'Test properties before and after. If color/texture/properties change, a new substance likely formed. If it\'s just mixed but properties same, it\'s physical.', nextScene: 'mixingExperiment', isCorrect: true, feedback: 'Excellent! You\'re identifying that NEW substances have NEW properties. If properties change, chemistry happened!' },
        { text: 'Just assume they mixed like salt and water', nextScene: 'mixingExperiment', isCorrect: false, feedback: 'Different reactions work differently! We need to TEST and OBSERVE. Some mixtures are physical (salt dissolves), others are chemical (new substance forms). Let\'s test systematically.' }
      ]
    },

    mixingExperiment: {
      module: 'matter',
      standard: 'ALT 4',
      title: "⚗️ Mixing Experiments: Physical vs. Chemical",
      text: `**Experiment 1: Salt + Water (Physical Change)**
- Before: Salt crystals (white, solid) + clear water
- Mix: Salt dissolves
- After: Clear solution (looks like just water)
- Can we get it back? YES—heat it and salt crystals reappear
- Properties changed? No—it's still salt + water, just rearranged
- Conclusion: PHYSICAL CHANGE

**Experiment 2: Baking Soda + Vinegar (Chemical Change)**
- Before: Baking soda (white powder) + vinegar (clear liquid)
- Mix: Fizzes, bubbles, releases gas!
- After: Clear liquid (different from either substance alone)
- Can we get original back? NO—it's now a new substance (sodium acetate + water + CO2 gas)
- Properties changed? YES—it fizzes, it's warm, it has different properties
- Conclusion: CHEMICAL CHANGE (new substance formed!)

**Experiment 3: Calcium Hydroxide + Sodium Carbonate (Your mystery)**
- Before: Both clear, colorless liquids
- Mix: White solid appears immediately!
- After: Cloudy liquid with white precipitate
- Can we get original back? NO—the white solid is a new substance
- Properties changed? YES—clear → cloudy, new solid formed
- Conclusion: CHEMICAL CHANGE

**Your analysis:**`,
      choices: [
        { text: 'When two substances mix, if NEW properties appear (color change, precipitate, gas, heat), a CHEMICAL CHANGE occurred and a NEW SUBSTANCE formed. If only physical rearrangement, original substances can be recovered.', nextScene: 'mixingConclusion', isCorrect: true, feedback: 'BRILLIANT analysis! You\'ve distinguished chemical from physical changes using observable evidence. This is core chemistry!' }
      ]
    },

    mixingConclusion: {
      module: 'matter',
      standard: 'ALT 4',
      title: "✅ ALT 4 Complete: Mixing Creates New Substances!",
      text: `**What You've Discovered:**

When substances mix, TWO things can happen:

**PHYSICAL CHANGES:**
- Substances rearrange but don't become something new
- You can usually reverse it
- Examples: salt dissolving, ice melting, mixing sand and water

**CHEMICAL CHANGES:**
- New substances form with different properties
- You usually CAN'T reverse it easily
- Evidence: color change, gas, precipitate, heat, light
- Examples: burning, rusting, baking, digestion

**Signs of Chemical Change:**
🔥 Heat or cold change
💨 Gas bubbles or smell
🌈 Color change
⚪ Precipitate (solid forms)
✨ Light released

**What you learned:**
✓ The difference between physical and chemical changes
✓ How to observe evidence of chemical reactions
✓ That new substances have new properties
✓ How to test whether change is reversible

You've now completed all four Matter missions! You understand:
✓ Matter is made of particles (ALT 1)
✓ Weight is conserved (ALT 2)
✓ Materials have measurable properties (ALT 3)
✓ Mixing can create new substances (ALT 4)`,
      choices: [
        { text: 'Explore Motion & Forces', nextScene: 'motionIntro', isCorrect: true },
        { text: 'Explore Energy & Life', nextScene: 'energyIntro', isCorrect: true },
        { text: 'Return to Module Selection', nextScene: 'moduleSelect', isCorrect: true }
      ]
    },

    // ===== MOTION MODULE =====
    motionIntro: {
      module: 'motion',
      title: "⚡ Motion & Forces Module",
      text: `Everything that moves has forces acting on it. From throwing a ball to objects falling from the sky, forces explain WHY things move.

In this module, you'll investigate:
- How gravity works
- Why things fall DOWN (not up!)
- How forces cause motion
- How to measure and predict motion

Let's start with gravity...`,
      choices: [
        { text: 'Mission 1: Which Way Does Gravity Pull? (ALT 5)', nextScene: 'gravityMission', isCorrect: true },
        { text: 'Return to Module Selection', nextScene: 'moduleSelect', isCorrect: true }
      ]
    },

    gravityMission: {
      module: 'motion',
      standard: 'ALT 5',
      title: "🌍 Mission 1: The Gravity Direction Mystery",
      subtitle: "Motion & Stability - Gravitational Force",
      text: `Everyone "knows" gravity pulls things DOWN. But how do we actually KNOW this from evidence?

What if we tested objects in different ways:
- Dropping things
- Hanging objects
- Swinging objects
- Objects on slopes

Can we PROVE that Earth's gravity always pulls in the same direction?

**Your investigation question:** In what direction does Earth's gravitational force pull objects?`,
      choices: [
        { text: 'Design multiple tests showing objects fall/hang/pull in the same direction using different methods and materials', nextScene: 'gravityExperiment', isCorrect: true, feedback: 'Perfect! Multiple independent tests with different materials will show the PATTERN. This is how scientists prove universal laws!' },
        { text: 'We already know gravity pulls down', nextScene: 'gravityExperiment', isCorrect: false, feedback: 'SHOW IT, don\'t assume it! Scientists test even things that seem obvious. Let\'s gather evidence.' }
      ]
    },

    gravityExperiment: {
      module: 'motion',
      standard: 'ALT 5',
      title: "🔬 Testing Gravity Direction",
      text: `**Test 1: Free Fall**
Drop objects from different heights:
- Tennis ball: Falls straight down
- Feather: Falls down (slower, but still down)
- Piece of paper: Falls down (slower in air, but down)
- Marble: Falls down fast
Observation: ALL fall toward Earth's center (down)

**Test 2: Hanging Objects**
Suspend objects by string:
- Ball hanging from string: Hangs straight down, string points toward Earth's center
- Multiple objects: All point the same direction
- On a slope: String points straight down, not along the slope
Observation: ALL hang downward (toward Earth's center)

**Test 3: Pendulum**
Swing a weight on a string:
- Swings back and forth
- But the string always pulls toward Earth's center
- Even at the highest point of swing, gravity pulls down
Observation: Gravity pulls in ONE direction, regardless of object motion

**Test 4: Different Locations**
Test in different spots (north, south, flat, slope):
- Everywhere we test, objects fall the same direction
- In Portland, San Francisco, New York—all down
- Up a mountain or down in a valley—still down
Observation: Direction is consistent everywhere on Earth

**Your conclusion:**`,
      choices: [
        { text: 'Earth\'s gravitational force is directed DOWN (toward Earth\'s center) on all objects, consistently, everywhere on Earth. This is always the same direction—it\'s a universal pattern.', nextScene: 'gravityConclusion', isCorrect: true, feedback: 'EXCELLENT! You\'ve used multiple lines of evidence to support an argument about gravitational direction. This is how we know gravity is real and directional!' }
      ]
    },

    gravityConclusion: {
      module: 'motion',
      standard: 'ALT 5',
      title: "✅ ALT 5 Complete: Gravity is Directional!",
      text: `**What You've Discovered:**

Earth's gravitational force:
✓ Acts on ALL objects
✓ Is always directed DOWNWARD (toward Earth's center)
✓ Is consistent everywhere on Earth
✓ Doesn't depend on an object's weight, material, or motion
✓ Is the reason objects fall, hang, and stay on Earth

**Why This Matters:**
- Without gravity, there would be no "down"
- All objects on Earth are constantly pulled toward the center
- This is why we stay on the ground
- This is what makes planets orbit the sun
- This is why the moon orbits Earth

**The Evidence-Based Argument:**
You didn't just accept that gravity pulls down. You:
1. Made observations (objects fall down)
2. Tested multiple scenarios (free fall, hanging, pendulums)
3. Used different materials and locations
4. Found a consistent pattern
5. Drew a conclusion from evidence

This is exactly how scientists BUILD ARGUMENTS!

**What you learned:**
✓ Gravity has direction (down)
✓ How to gather evidence for a claim
✓ That universal patterns can be discovered through testing
✓ How to build an argument from observations`,
      choices: [
        { text: 'Explore Energy & Life', nextScene: 'energyIntro', isCorrect: true },
        { text: 'Return to Module Selection', nextScene: 'moduleSelect', isCorrect: true }
      ]
    },

    // ===== ENERGY MODULE =====
    energyIntro: {
      module: 'energy',
      title: "🌞 Energy & Life Module",
      text: `Energy is everywhere. The sun's energy powers plants, animals eat plants, and we get energy from food. It's all connected!

In this module, you'll investigate:
- Where animals' food energy comes from (the SUN!)
- How plants capture sun energy
- How matter and energy move through ecosystems
- Why food chains exist

Let's follow the energy...`,
      choices: [
        { text: 'Mission 1: Where Does Food Energy Come From? (ALT 6)', nextScene: 'foodEnergyMission', isCorrect: true },
        { text: 'Mission 2: Do Plants Really Eat Air & Water? (ALT 7)', nextScene: 'plantGrowthMission', isCorrect: true },
        { text: 'Mission 3: Tracking Matter Through Ecosystems (ALT 8)', nextScene: 'ecosystemMatterMission', isCorrect: true },
        { text: 'Return to Module Selection', nextScene: 'moduleSelect', isCorrect: true }
      ]
    },

    foodEnergyMission: {
      module: 'energy',
      standard: 'ALT 6',
      title: "☀️ Mission 1: Energy from the Sun",
      subtitle: "Energy - Energy from the Sun",
      text: `You eat an apple for a snack. That apple gives you energy to run, think, and stay warm.

But where did the APPLE get its energy?

The answer: THE SUN.

But how does the sun's energy get into an apple? It's a three-step process:
1. Sun shines on Earth (light energy)
2. Plants capture that light and convert it to FOOD (chemical energy)
3. We eat the food and use that stored energy

Your mission: Use a MODEL to show how solar energy becomes food energy and then animal energy.`,
      choices: [
        { text: 'Create a diagram showing: Sun → Plant (photosynthesis) → Animal (eating) → Energy for growth/movement/warmth', nextScene: 'foodEnergyModel', isCorrect: true, feedback: 'Perfect! You\'ve identified the energy pathway. Now let\'s build a visual model to understand it.' },
        { text: 'Energy in food just exists—it doesn\'t come from anywhere', nextScene: 'foodEnergyModel', isCorrect: false, feedback: 'Nope! ALL energy ultimately comes from the sun. Plants capture it, we get it from food. Let\'s trace it.' }
      ]
    },

    foodEnergyModel: {
      module: 'energy',
      standard: 'ALT 6',
      title: "🌱 Building an Energy Model",
      text: `**Your Energy Model:**

**STAGE 1: Sun's Energy**
- The sun radiates light energy to Earth (billions of miles away!)
- Plants receive this light energy

**STAGE 2: Photosynthesis in Plants**
- Green plants capture light energy
- They convert it into chemical energy (stored in sugar/food)
- This happens in their leaves using chlorophyll
- Plants use this energy for growth, but store extra

**STAGE 3: Animals Eat Plants**
- Cows eat grass (plants) and get stored energy
- We eat apples (plants) and get stored energy
- Chickens eat seeds and convert that energy into eggs
- This energy powers: body repair, growth, motion, maintaining warmth

**STAGE 4: Energy in Our Bodies**
- We use plant energy to:
  - Grow bigger (cell building)
  - Move and run (muscle energy)
  - Stay warm (body heat)
  - Think (brain energy)
  - Heal from injuries

**The Big Idea:** The apple doesn't CREATE energy. It's STORING energy that came from the sun. When you eat it, you're using ancient sunlight!

**How can we TEST this model?**`,
      choices: [
        { text: 'Compare plant growth in sunlight vs. darkness. Plants in sun grow more, plants in dark fade. This proves sun energy → plant growth.', nextScene: 'foodEnergyTest', isCorrect: true, feedback: 'Excellent! This experiment shows the connection between sun energy and plant growth. The evidence supports your model!' }
      ]
    },

    foodEnergyTest: {
      module: 'energy',
      standard: 'ALT 6',
      title: "🔬 Testing the Energy Model",
      text: `**Experiment: Plant Growth Under Different Light**

Setup:
- Plant A: 8 hours sunlight daily
- Plant B: No sunlight (kept in dark closet)
- Plant C: Low sunlight (2 hours daily)
- Same water, soil, temperature

After 3 weeks:

**Plant A (Full Sun):**
- Height: 8 inches
- Color: Deep green
- Leaves: Large, healthy
- Energy status: HIGH—capturing lots of sun energy

**Plant B (No Sun):**
- Height: 2 inches (weak, stretching for light)
- Color: Pale yellow
- Leaves: Small, weak
- Energy status: LOW—no sun energy captured, using stored reserves

**Plant C (Low Sun):**
- Height: 5 inches
- Color: Medium green
- Leaves: Medium, somewhat healthy
- Energy status: MEDIUM—capturing some sun energy

**What does this data show about your energy model?**`,
      choices: [
        { text: 'The more sunlight a plant receives, the more energy it captures and the more it grows. This proves sunlight (solar energy) drives plant growth and food production.', nextScene: 'foodEnergyConclusion', isCorrect: true, feedback: 'PERFECT! Your experimental data supports your model. Plant growth is directly tied to sun energy capture!' }
      ]
    },

    foodEnergyConclusion: {
      module: 'energy',
      standard: 'ALT 6',
      title: "✅ ALT 6 Complete: Energy from the Sun!",
      text: `**What You've Discovered:**

The Sun is Earth's primary energy source for ALL life:

**Energy Path:**
☀️ Sun Energy → 🌱 Plant Energy (photosynthesis) → 🐄 Animal Energy (eating) → 👧 Your Body Energy

**Where Your Energy Comes From:**
- Food energy comes from plants or plant-eating animals
- Plant energy comes from captured sunlight
- Every calorie you eat is converted sunlight!

**Body Uses for Energy:**
✓ Body repair (healing cuts, growing muscle)
✓ Growth (getting taller, developing)
✓ Motion (running, jumping, moving)
✓ Maintaining body warmth (staying 98.6°F)
✓ Brain function (thinking, learning)

**Why Models Matter:**
You created a model to show how energy flows. This helps us:
- Understand where food comes from
- Predict what happens without sun (nothing grows)
- Understand why we need plants
- Know that energy can't appear from nowhere—it's transferred and transformed

**What you learned:**
✓ How to create a model based on evidence
✓ That all life depends on the sun
✓ Where food energy originates
✓ How energy supports body functions`,
      choices: [
        { text: 'Mission 2: Do Plants Really Eat Air & Water? (ALT 7)', nextScene: 'plantGrowthMission', isCorrect: true },
        { text: 'Return to Module Selection', nextScene: 'moduleSelect', isCorrect: true }
      ]
    },

    plantGrowthMission: {
      module: 'energy',
      standard: 'ALT 7',
      title: "🌱 Mission 2: What Do Plants Really Need?",
      subtitle: "Molecules to Organisms - Air and Water",
      text: `Here's a mystery: A plant sits in a pot of soil. You water it. Months later, it's grown twice as big and weighs much more.

Where did all that new MATTER come from?

Does it come from the soil? From the water? Or from... the AIR?

Most people think: "Plants eat soil like we eat food."

But scientists discovered something surprising: Plants get their growth MOSTLY from air and water, not soil!

**Your investigation question:** Where does the material for plant growth come from—soil, water, or air?`,
      choices: [
        { text: 'Design an experiment testing plant growth with different amounts of soil, water, and light over time', nextScene: 'plantGrowthExperiment', isCorrect: true, feedback: 'Great start! But you need to isolate one variable. Let me guide you to the classic experiment that proves plants get matter from air and water.' }
      ]
    },

    plantGrowthExperiment: {
      module: 'energy',
      standard: 'ALT 7',
      title: "🔬 The Willow Tree Experiment (1600s)",
      text: `This is a REAL HISTORIC EXPERIMENT by scientist Jan Baptist van Helmont:

**Setup:**
- Start with: A willow tree (weigh it) + soil (weigh it)
- Plant tree in soil
- Water ONLY with distilled water (pure H2O)
- Grow for 5 years with normal sunlight
- At end: Weigh tree again + weigh soil

**Original Weights:**
- Tree: 5 pounds
- Soil: 200 pounds

**After 5 Years:**
- Tree: 169 pounds (grew 164 pounds!)
- Soil: 199.9 pounds (almost unchanged!)

**The Mystery:** The tree gained 164 pounds, but the soil only lost 0.1 pounds!

Where did 164 pounds of new tree matter come from?

Van Helmont concluded: It came from WATER (and later scientists added) AIR!

**How is this possible?** Through photosynthesis:
- Plant roots absorb water (H2O)
- Plant leaves absorb carbon dioxide from air (CO2)
- Sunlight provides energy
- Photosynthesis combines these into SUGAR (plant matter)
- The plant grows!

**What evidence does this support?**`,
      choices: [
        { text: 'Plants get their growth material chiefly from water and air, NOT soil. Soil provides minerals/nutrients but not the main bulk material.', nextScene: 'plantGrowthConclusion', isCorrect: true, feedback: 'EXACTLY! This experiment (done in the 1600s!) proved that plants build themselves from air and water. Revolutionary discovery!' }
      ]
    },

    plantGrowthConclusion: {
      module: 'energy',
      standard: 'ALT 7',
      title: "✅ ALT 7 Complete: Plants Eat Air & Water!",
      text: `**What You've Discovered:**

Plants don't "eat soil" like animals eat food.

**Where Plants Get Growth Material:**

**From Water (via roots):** H2O
**From Air (via leaves):** CO2 (carbon dioxide)
**From Sunlight (via chlorophyll):** Energy to combine H2O + CO2

**The Result:** Sugar and plant matter (starch, cellulose, etc.)

**What About Soil?**
Soil provides:
- Nitrogen, phosphorus, potassium (nutrients)
- Micronutrients
- Support for roots
- Water storage

BUT: Soil doesn't provide the MAIN BUILDING BLOCKS (water and air do)

**Why This Matters:**
✓ Explains photosynthesis
✓ Shows why plants need light, water, AND air
✓ Explains why plants need air circulation
✓ Shows that matter comes from the environment through chemical processes
✓ Proves plants are PRIMARY PRODUCERS (they make food from sun energy + water + air)

**The Chain:**
Sun + Water + Air → Plant Matter → Animal Matter → Your Body!

**What you learned:**
✓ Plants get growth material from air and water
✓ Soil provides minerals, not bulk matter
✓ Photosynthesis converts sun energy into food
✓ How to interpret experimental evidence`,
      choices: [
        { text: 'Mission 3: Tracking Matter in Ecosystems (ALT 8)', nextScene: 'ecosystemMatterMission', isCorrect: true },
        { text: 'Return to Module Selection', nextScene: 'moduleSelect', isCorrect: true }
      ]
    },

    ecosystemMatterMission: {
      module: 'energy',
      standard: 'ALT 8',
      title: "🌿 Mission 3: Matter Movement in Ecosystems",
      subtitle: "Ecosystems - Movement of Matter",
      text: `In a forest ecosystem, everything is connected:
- Trees capture sun energy and air (make food)
- Deer eat trees (get energy and matter)
- Wolves eat deer (get energy and matter)
- Decomposers eat dead organisms (recycle matter)
- Matter returns to soil and air

The KEY QUESTION: How does matter MOVE and GET RECYCLED through ecosystems?

Your mission: Build a MODEL showing how matter cycles through plants, animals, and decomposers.`,
      choices: [
        { text: 'Create a diagram showing matter flow: Plants → Animals → Decomposers → back to soil/air/plants', nextScene: 'ecosystemMatterModel', isCorrect: true, feedback: 'Perfect! You\'re going to trace matter through the complete cycle. Let\'s build a comprehensive model.' }
      ]
    },

    ecosystemMatterModel: {
      module: 'energy',
      standard: 'ALT 8',
      title: "🌍 Ecosystem Matter Cycling Model",
      text: `**Your Ecosystem Model:**

**BIOSPHERE (living things):**

🌱 **Plants (Producers)**
- Capture CO2 from air
- Capture H2O from soil
- Build plant matter (leaves, roots, seeds)
- Store energy from sun

🦌 **Herbivores (Primary Consumers)**
- Eat plants
- Get matter and energy
- Build animal body (muscle, bone, fur)
- Release CO2 back to air through breathing

🐺 **Carnivores (Secondary Consumers)**
- Eat herbivores
- Get matter and energy
- Build animal body
- Release CO2 through breathing

💀 **Decomposers (Bacteria, fungi)**
- Break down dead plants and animals
- Return carbon to air (CO2)
- Return nitrogen to soil
- Return phosphorus to soil

**GEOSPHERE (non-living matter):**

🌎 **Soil:**
- Contains decomposed matter
- Contains minerals (nitrogen, phosphorus, potassium)
- Provides water and nutrients to plants

💨 **Atmosphere (Air):**
- Contains CO2 (carbon dioxide)
- Plants take it in
- Animals release it through breathing
- Decomposers release it

💧 **Hydrosphere (Water):**
- Water moves through roots
- Moves through plants/animals
- Released through breathing and waste
- Returns to soil

**The Cycle:**
Plant captures CO2 + H2O → Animal eats plant → Animal dies → Decomposer breaks it down → Returns matter to soil/air → Plant captures it again!

**Matter is recycled forever—never created or destroyed!**

**How can we TEST/OBSERVE this cycle in action?**`,
      choices: [
        { text: 'Observe a compost bin showing decomposition, or track matter movement through a aquarium ecosystem over time', nextScene: 'ecosystemMatterTest', isCorrect: true, feedback: 'Excellent! These observations will show the cycle happening in real time!' }
      ]
    },

    ecosystemMatterTest: {
      module: 'energy',
      standard: 'ALT 8',
      title: "🔬 Observing Matter Cycling",
      text: `**Observation 1: Compost Bin Decomposition**

Start: Add dead leaves, food scraps, grass clippings
- Week 1-2: Material visible, some breakdown
- Week 3-4: Material darker, smaller, heating up (bacteria working!)
- Week 6-8: Original material almost gone
- Week 12: Rich, dark soil-like material

Result: Dead matter has been broken down and recycled back into soil! Matter was conserved—changed form but not lost.

**Observation 2: Aquatic Ecosystem**

Set up aquarium: Plants, fish, snails, rocks
- Plants produce O2 (through photosynthesis)
- Fish breathe O2, produce CO2
- Fish waste feeds bacteria
- Plants use fish waste (nitrogen) as nutrients
- Snails eat dead plant matter
- Decomposers break everything down
- Matter cycles within closed system

Result: You can observe the complete cycle in one tank! Matter moves plant → animal → decomposer → back to plant

**Observation 3: Forest Floor**

Observe dead log on forest floor:
- Dead leaves decomposing
- Fungi breaking down wood
- Insects feeding on decomposing matter
- Nutrients returning to soil
- New plants growing from rich soil

Result: Death and decay feed new life! Matter cycles continuously.

**What does this show about matter in ecosystems?**`,
      choices: [
        { text: 'Matter moves from plants → animals → decomposers → back to environment. Nothing is lost. It\'s recycled continuously. All organisms depend on this cycle.', nextScene: 'ecosystemMatterConclusion', isCorrect: true, feedback: 'PERFECT! You understand the complete matter cycle. This is ecology—understanding how systems balance!' }
      ]
    },

    ecosystemMatterConclusion: {
      module: 'energy',
      standard: 'ALT 8',
      title: "✅ ALT 8 Complete: Matter Cycles Through Ecosystems!",
      text: `**What You've Discovered:**

Matter continuously cycles through ecosystems:

**The Carbon-Nitrogen-Water Cycle:**

Carbon:
- Plants take CO2 from air
- Animals eat plants (get carbon)
- Animals breathe CO2 back to air
- Decomposers release CO2 from dead matter
- Cycle repeats

Nitrogen:
- Soil contains nitrogen compounds
- Plants take them up
- Animals eat plants (get nitrogen)
- Dead organisms decompose
- Nitrogen returns to soil
- Cycle repeats

Water:
- Plants take up water from soil
- Animals drink water
- Water returns through breathing/waste/decomposition
- Cycle repeats

**Key Principles:**
✓ Matter is never created or destroyed (Law of Conservation!)
✓ Matter changes form as it cycles
✓ Decomposers are essential for recycling
✓ Every organism depends on cycling matter
✓ Ecosystems are closed systems for matter (but open for energy from sun)

**Why This Matters:**
- Understanding cycles helps us manage ecosystems
- Pollution disrupts cycles
- Recycling mimics natural cycling
- All life depends on matter cycling

**What you learned:**
✓ How to create a model of ecosystem processes
✓ How matter moves through ecosystems
✓ The role of decomposers
✓ Why cycling is essential for life
✓ How to observe cycles in action`,
      choices: [
        { text: 'Explore Earth & Space', nextScene: 'earthSpaceIntro', isCorrect: true },
        { text: 'Explore Engineering Design', nextScene: 'engineeringIntro', isCorrect: true },
        { text: 'Return to Module Selection', nextScene: 'moduleSelect', isCorrect: true }
      ]
    },

    // ===== EARTH & SPACE MODULE =====
    earthSpaceIntro: {
      module: 'earth',
      title: "🌍 Earth & Space Module",
      text: `Our planet is part of a vast universe. Stars, planets, water, weather, and our atmosphere are all connected.

In this module, you'll investigate:
- What stars really are (ALT 9)
- How Earth's rotation and orbit work (ALT 10)
- How Earth's systems interact (ALT 11)
- Where Earth's water actually is (ALT 12)

Let's explore our world and universe...`,
      choices: [
        { text: 'Mission 1: Why Do Stars Look Different? (ALT 9)', nextScene: 'starsDistanceMission', isCorrect: true },
        { text: 'Mission 2: Reading Sky Patterns (ALT 10)', nextScene: 'skyPatternsMission', isCorrect: true },
        { text: 'Mission 3: How Earth\'s Systems Interact (ALT 11)', nextScene: 'earthSystemsMission', isCorrect: true },
        { text: 'Mission 4: Where Is All Our Water? (ALT 12)', nextScene: 'waterDistributionMission', isCorrect: true },
        { text: 'Return to Module Selection', nextScene: 'moduleSelect', isCorrect: true }
      ]
    },

    starsDistanceMission: {
      module: 'earth',
      standard: 'ALT 9',
      title: "⭐ Mission 1: Why Stars Shine at Different Brightnesses",
      subtitle: "Earth's Place - Brightness of the Sun",
      text: `Look at the night sky. Some stars are bright, others barely visible. Are the bright ones:
- Bigger stars?
- Hotter stars?
- Closer stars?
- OR something else?

Here's the key insight: The sun is just a STAR. It looks so bright because it's CLOSE to us. Other stars look dim because they're VERY FAR AWAY.

**Your investigation question:** Why do some stars appear brighter than others? Is it because they're bigger/hotter, or because they're closer/farther away?`,
      choices: [
        { text: 'Test the brightness pattern using a light bulb model—move it closer/farther and measure brightness', nextScene: 'starsDistanceExperiment', isCorrect: true, feedback: 'Perfect! Using a light source as a star model will help you understand distance and brightness.' }
      ]
    },

    starsDistanceExperiment: {
      module: 'earth',
      standard: 'ALT 9',
      title: "🔬 Light and Distance Experiment",
      text: `**Setup:**
- Light bulb (represents a star)
- Light meter or brightness measurement
- Measure brightness at different distances

**Results:**

Distance: 1 foot | Brightness: 100%
Distance: 2 feet | Brightness: 25%
Distance: 3 feet | Brightness: 11%
Distance: 4 feet | Brightness: 6%

**Pattern:** Brightness decreases with the SQUARE of the distance!
- 2x farther = 1/4 brightness
- 3x farther = 1/9 brightness
- 4x farther = 1/16 brightness

**Application to Stars:**

Sirius (brightest star):
- It's bright because it's CLOSE (8.6 light-years away)
- If we moved Sirius to where Betelgeuse is (643 light-years away), it would be much dimmer

The Sun:
- Appears brightest because it's CLOSEST (93 million miles)
- If we moved Sun to where Sirius is, it would look like an ordinary star!

**What's your conclusion?**`,
      choices: [
        { text: 'A star\'s apparent brightness depends mainly on its DISTANCE from Earth, not on how bright it actually is. Closer stars look brighter; farther stars look dimmer.', nextScene: 'starsDistanceConclusion', isCorrect: true, feedback: 'EXCELLENT! You\'ve discovered why the sun dominates our sky—proximity matters more than actual brightness!' }
      ]
    },

    starsDistanceConclusion: {
      module: 'earth',
      standard: 'ALT 9',
      title: "✅ ALT 9 Complete: Distance Changes Brightness!",
      text: `**What You've Discovered:**

A star's APPARENT BRIGHTNESS depends on:
1. How bright the star actually is (luminosity)
2. How far away it is (distance)

**The Math:**
Brightness = (Star's True Brightness) ÷ (Distance²)

**Real World Applications:**

The Sun:
- Actual brightness: Medium (compared to other stars)
- Distance: 93 million miles (VERY CLOSE)
- Apparent brightness: BLINDINGLY BRIGHT

Sirius:
- Actual brightness: About 26x our sun
- Distance: 51 trillion miles away
- Apparent brightness: Brightest star in night sky (but we see a point of light)

Betelgeuse:
- Actual brightness: Extremely bright (100,000x sun!)
- Distance: 4,900 trillion miles away
- Apparent brightness: Dimly visible, red color

**Why This Matters:**
✓ Explains why the sun is so dominant
✓ Shows that most stars are much farther than they appear
✓ Helps us understand cosmic distances
✓ Demonstrates the inverse square law

**What you learned:**
✓ Apparent brightness depends on distance and actual brightness
✓ How to test physical laws with models
✓ That the inverse square law describes light spreading
✓ Why the sun looks so bright (it's close!)`,
      choices: [
        { text: 'Mission 2: Reading Sky Patterns (ALT 10)', nextScene: 'skyPatternsMission', isCorrect: true },
        { text: 'Return to Module Selection', nextScene: 'moduleSelect', isCorrect: true }
      ]
    },

    skyPatternsMission: {
      module: 'earth',
      standard: 'ALT 10',
      title: "🌗 Mission 2: Patterns in the Night Sky",
      subtitle: "Earth's Place - Night Sky Observations",
      text: `Over a week, you notice:
- The sun rises in the EAST every morning
- It sets in the WEST every evening
- The sun is higher in summer, lower in winter
- Shadows CHANGE throughout the day (short at noon, long morning/evening)
- Stars are in different places each night
- Some stars appear every night, others disappear seasonally

These patterns aren't random—they tell a story about Earth's rotation and orbit!

**Your investigation question:** What causes patterns in shadows, daylight, and star positions?`,
      choices: [
        { text: 'Track shadows throughout the day, sun position throughout the year, and stars throughout the month', nextScene: 'skyPatternsData', isCorrect: true, feedback: 'Perfect! Observing these patterns over time will reveal the causes!' }
      ]
    },

    skyPatternsData: {
      module: 'earth',
      standard: 'ALT 10',
      title: "📊 Collecting Sky Pattern Data",
      text: `**Data Collection 1: Daily Shadow Changes**

Measured at: Same location, sunny days

9:00 AM: Shadow points WEST, length = 10 feet
12:00 PM: Shadow points NORTH, length = 2 feet (shortest!)
3:00 PM: Shadow points EAST, length = 8 feet
6:00 PM: Shadow points EAST, length = 20 feet (longest!)

Pattern: Shadows move throughout the day and are shortest at noon. This shows the sun's DAILY PATH across the sky.

**Data Collection 2: Seasonal Sun Height**

December (winter): Sun path is LOW (only 25° above horizon at noon)
March (spring): Sun path is MEDIUM (45° above horizon at noon)
June (summer): Sun path is HIGH (65° above horizon at noon)
September (fall): Sun path is MEDIUM (45° above horizon at noon)

Pattern: Sun height changes with seasons. Higher in summer, lower in winter.

**Data Collection 3: Star Position Changes**

January night sky: Orion constellation visible, high in sky
April night sky: Orion still visible but lower, moving west
July night sky: Orion below horizon (can't see it)
October night sky: Orion appears again, moving from east

Pattern: Stars appear in different positions throughout the year, moving from east to west.

**What causes these patterns?**`,
      choices: [
        { text: 'Earth ROTATES every 24 hours (causing daily shadow/sun changes and east-west star motion). Earth ORBITS the sun in 365 days (causing seasonal sun height changes and yearly star position changes).', nextScene: 'skyPatternsConclusion', isCorrect: true, feedback: 'PERFECT! You\'ve connected observations to the cause—Earth\'s rotation and orbit explain all the patterns!' }
      ]
    },

    skyPatternsConclusion: {
      module: 'earth',
      standard: 'ALT 10',
      title: "✅ ALT 10 Complete: Earth Movements Explain Sky Patterns!",
      text: `**What You've Discovered:**

Earth's rotation and orbit cause observable patterns:

**ROTATION (spinning like a top):**
- Takes 24 hours to complete one spin
- Causes: Daily sun movement (east to west)
- Causes: Daily star movement (east to west)
- Causes: Day and night (half of Earth faces sun = day, other half = night)
- Causes: Shadow changes throughout the day

**ORBIT (traveling around the sun):**
- Takes 365 days to complete one orbit
- Causes: Seasonal changes in sun height
- Causes: Seasonal star visibility changes
- Causes: Day length changes (longer days in summer, shorter in winter)
- Causes: Seasons (tilt of Earth's axis)

**Pattern 1: Daily Shadow Changes**
✓ Shadows are long in morning (sun is low, light hits at angle)
✓ Shadows are short at noon (sun is high, light hits more directly)
✓ Shadows are long in evening (sun is low again)

**Pattern 2: Seasonal Sun Height**
✓ Summer: Sun high in sky, days are long
✓ Winter: Sun low in sky, days are short
✓ Caused by Earth's tilted axis

**Pattern 3: Star Positions**
✓ Stars appear to move east to west nightly (actually Earth rotating)
✓ Different stars visible each season (actually Earth's orbit position changing)

**Why This Matters:**
✓ Explains why we have day/night
✓ Explains seasons and why summer is hot, winter is cold
✓ Explains why the same stars don't appear all year
✓ Shows Earth is a moving, rotating planet
✓ Demonstrates how to use evidence to understand planetary motion

**What you learned:**
✓ How to observe and record patterns over time
✓ How to interpret data to understand causes
✓ Earth's rotation and orbit
✓ Connection between observations and explanations`,
      choices: [
        { text: 'Mission 3: How Earth\'s Systems Interact (ALT 11)', nextScene: 'earthSystemsMission', isCorrect: true },
        { text: 'Return to Module Selection', nextScene: 'moduleSelect', isCorrect: true }
      ]
    },

    earthSystemsMission: {
      module: 'earth',
      standard: 'ALT 11',
      title: "🌍 Mission 3: Earth's Systems Interact",
      subtitle: "Earth's Systems - Atmospheric Interactions",
      text: `Earth has four major systems that are constantly interacting:

🌎 **Geosphere** (rocks, soil, mountains, crust)
💨 **Atmosphere** (air, weather, gases)
💧 **Hydrosphere** (water, oceans, rivers, ice)
🌱 **Biosphere** (all living things)

These systems don't work independently—they affect each other constantly!

**Your investigation question:** How do Earth's systems interact and depend on each other?

Let's explore interactions with a REAL WORLD EXAMPLE: The Water Cycle`,
      choices: [
        { text: 'Model how water moves between atmosphere, hydrosphere, geosphere, and biosphere in the water cycle', nextScene: 'earthSystemsModel', isCorrect: true, feedback: 'Perfect! The water cycle is a great example of systems interacting. Let\'s trace it!' }
      ]
    },

    earthSystemsModel: {
      module: 'earth',
      standard: 'ALT 11',
      title: "💧 The Water Cycle: Systems Interacting",
      text: `**The Water Cycle Shows All Systems Connected:**

**EVAPORATION (Hydrosphere → Atmosphere)**
- Sun heats water in oceans, rivers, lakes
- Water turns to invisible water vapor (gas)
- Rises into atmosphere
- Interaction: Sun energy + water = atmospheric water

**TRANSPIRATION (Biosphere → Atmosphere)**
- Plants take water from soil through roots
- Water moves up through plants
- Leaves release water vapor into air
- Interaction: Living things release water to atmosphere

**CONDENSATION (Atmosphere → Clouds)**
- Water vapor cools in upper atmosphere
- Forms tiny water droplets
- Droplets stick together = clouds
- Interaction: Atmosphere changes from gas to liquid

**PRECIPITATION (Atmosphere → Hydrosphere & Geosphere)**
- Water falls as rain or snow
- Some lands on oceans (hydrosphere)
- Some lands on mountains and soil (geosphere)
- Some is absorbed by plants (biosphere)
- Interaction: Water returns to Earth's surface

**INFILTRATION (Hydrosphere + Geosphere)**
- Water seeps into soil
- Flows through rock layers
- Becomes groundwater
- Plants draw it up through roots
- Interaction: Water stored in soil, used by life

**COLLECTION (Hydrosphere)**
- Rainwater flows downhill
- Becomes streams and rivers
- Flows back to oceans
- Cycle repeats!
- Interaction: Water returns to oceans

**Systems Interaction Summary:**

🌞 **Solar Energy** powers evaporation
💨 **Atmosphere** holds water vapor
💧 **Hydrosphere** provides water source
🌍 **Geosphere** stores infiltrated water
🌱 **Biosphere** absorbs and transpires water

All four systems working together = WATER CYCLE

**What would happen if we changed one system?**`,
      choices: [
        { text: 'If we removed all plants (biosphere), evaporation would decrease and water wouldn\'t cycle as well. If we heated the atmosphere, evaporation would increase. Systems are interdependent!', nextScene: 'earthSystemsConclusion', isCorrect: true, feedback: 'EXCELLENT! You understand that changing one system affects others. This is systems thinking!' }
      ]
    },

    earthSystemsConclusion: {
      module: 'earth',
      standard: 'ALT 11',
      title: "✅ ALT 11 Complete: Systems Are Interconnected!",
      text: `**What You've Discovered:**

Earth's four systems constantly interact:

**Geosphere (rocks, soil, land):**
- Stores water (groundwater)
- Provides minerals for life
- Changes shape through erosion (hydrosphere interaction)
- Affected by living things (biosphere interaction)

**Atmosphere (air):**
- Holds water vapor
- Transports heat from sun
- Affected by living things (respiration adds CO2)
- Affects temperature (greenhouse effect)

**Hydrosphere (water):**
- Provides water to all systems
- Shapes geosphere (erosion, weathering)
- Provides habitat for biosphere
- Carries nutrients and energy

**Biosphere (living things):**
- Takes water from hydrosphere and geosphere
- Releases water and gases to atmosphere
- Changes geosphere (soil creation, erosion)
- Depends on all other systems

**Real-World Example: How Systems Interact**

Ocean water evaporates (Hydrosphere → Atmosphere)
→ Water vapor rises
→ Forms clouds
→ Cools and precipitates over mountains
→ Infiltrates soil (Atmosphere → Geosphere)
→ Plants use water and grow (Geosphere → Biosphere)
→ Roots hold soil, preventing erosion
→ Soil runs into rivers during rain
→ Rivers carry nutrients to oceans
→ Cycle continues!

**If One System Changes:**
- Cut down forests → Less transpiration → Less cloud formation → Less rain → Drought
- Pollute atmosphere → Acid rain → Damages rocks and soil → Affects life
- Dam rivers → Changes water flow → Affects ecosystems → Affects geology

**What you learned:**
✓ How to describe system interactions
✓ The water cycle as example of interconnection
✓ That changing one system affects others
✓ How to use models to show relationships`,
      choices: [
        { text: 'Mission 4: Where Is All Our Water? (ALT 12)', nextScene: 'waterDistributionMission', isCorrect: true },
        { text: 'Return to Module Selection', nextScene: 'moduleSelect', isCorrect: true }
      ]
    },

    waterDistributionMission: {
      module: 'earth',
      standard: 'ALT 12',
      title: "💧 Mission 4: Where Is Earth's Water?",
      subtitle: "Earth's Systems - Distribution of Water",
      text: `Imagine all of Earth's water as 100 drops.

How many drops are:
- In oceans?
- In ice caps?
- In groundwater?
- In lakes and rivers?
- Fresh water we can drink?

Most people think Earth has plenty of fresh water. But the ACTUAL numbers might surprise you!

**Your investigation question:** How is water distributed on Earth, and how much is fresh water we can actually use?`,
      choices: [
        { text: 'Gather data on Earth\'s water distribution and create a graph/pie chart showing percentages', nextScene: 'waterDistributionData', isCorrect: true, feedback: 'Perfect! Graphing the data will show the distribution clearly. You might be surprised by the results!' }
      ]
    },

    waterDistributionData: {
      module: 'earth',
      standard: 'ALT 12',
      title: "📊 Water Distribution Data",
      text: `**All Water on Earth: 100%**

**Saltwater (oceans and seas): 96.5%**
- Pacific Ocean
- Atlantic Ocean
- Indian Ocean
- Can't drink it (too salty for humans)

**Freshwater: 3.5%**
- Glaciers and ice caps: 2.4%
  - Locked in ice (hard to access)
- Groundwater: 0.9%
  - Underground in soil and rock
  - Some is accessible as wells
  - Some is too deep
- Surface/other water: 0.2%
  - Lakes: 0.013%
  - Rivers: 0.0008%
  - Atmosphere: 0.04%
  - Soil: 0.001%

**Freshwater Available to Use Right Now: 0.3%**
- This is the water we can actually drink and use!
- Much of it is already claimed by farms, cities, industry
- In many regions, it's not distributed fairly

**Visualization:**

If all Earth's water = 100 liters:
- 96.5 liters = Ocean (salty, unusable)
- 2.4 liters = Glaciers (frozen, mostly inaccessible)
- 0.9 liters = Groundwater (some accessible, some not)
- 0.2 liters = Lakes, rivers, atmosphere
- **0.003 liters = Fresh water actually available right now!**

**What patterns do you see in this data?**`,
      choices: [
        { text: 'Most water is salty (96.5%). Of the 3.5% freshwater, most is frozen in glaciers. Only about 0.3% is available for human use. Fresh water is actually RARE and PRECIOUS!', nextScene: 'waterDistributionConclusion', isCorrect: true, feedback: 'EXACTLY! This data shows that fresh water is not as abundant as people think. Understanding this is key to water conservation!' }
      ]
    },

    waterDistributionConclusion: {
      module: 'earth',
      standard: 'ALT 12',
      title: "✅ ALT 12 Complete: Water Distribution Reveals Scarcity!",
      text: `**What You've Discovered:**

Water covers 71% of Earth's surface, but FRESH WATER is surprisingly rare:

**The Reality:**
- 96.5% of Earth's water is salty ocean water (unusable for drinking/farming)
- Of the 3.5% freshwater:
  - 2.4% is frozen in glaciers and ice caps
  - 0.9% is groundwater (not all accessible)
  - 0.2% is in lakes, rivers, and atmosphere
  - **Only ~0.3% is available for human use**

**What This Means:**
✓ We have limited fresh water
✓ Some regions have plenty, others are in drought
✓ We must conserve water carefully
✓ Climate change threatens glacial ice (melting = more sea level rise, less freshwater reserves)
✓ Groundwater is being used faster than it's replaced in many places

**Data About Distribution:**
✓ Most freshwater is inaccessible (frozen)
✓ Available freshwater is unevenly distributed globally
✓ Some regions have abundance, others face severe shortage
✓ Population growth increases water demand

**Real-World Applications:**
- Desalination plants turn salty ocean water to fresh
- Irrigation systems manage precious farm water
- Cities manage water carefully during droughts
- Conservation is essential

**What you learned:**
✓ How to gather and interpret water distribution data
✓ How to create pie charts/graphs showing percentages
✓ That freshwater is precious and limited
✓ Connection between data and real-world resource management
✓ Why water conservation matters`,
      choices: [
        { text: 'Explore Engineering Design', nextScene: 'engineeringIntro', isCorrect: true },
        { text: 'Explore Humans & Earth (ALT 13)', nextScene: 'humanEarthMission', isCorrect: true },
        { text: 'Return to Module Selection', nextScene: 'moduleSelect', isCorrect: true }
      ]
    },

    // ===== HUMAN & EARTH MODULE =====
    humanEarthMission: {
      module: 'human',
      standard: 'ALT 13',
      title: "🌿 Protecting Earth's Resources",
      subtitle: "Earth & Humans - Protecting Earth",
      text: `Humans use Earth's resources every day:
- Trees for paper and wood
- Oil for energy and plastics
- Water for drinking and irrigation
- Soil for growing food
- Minerals for building and technology

But resources aren't unlimited. Communities around the world are finding WAYS TO PROTECT EARTH while meeting human needs.

**Your investigation question:** What are effective ways communities protect Earth's resources and environment?

Let's explore REAL EXAMPLES of communities making a difference...`,
      choices: [
        { text: 'Research and analyze real community conservation efforts (recycling, renewable energy, protected habitats, sustainable farming)', nextScene: 'humanEarthExamples', isCorrect: true, feedback: 'Perfect! Real-world examples show that change is possible. Let\'s analyze what works!' }
      ]
    },

    humanEarthExamples: {
      module: 'human',
      standard: 'ALT 13',
      title: "🌍 Community Solutions: Case Studies",
      text: `**Case Study 1: Costa Rica - Reforestation**

Problem: Deforestation was destroying habitats
Solution: Government paid landowners to NOT cut trees and to REPLANT forests
Result: Forest coverage increased from 21% to 52% in 30 years
Ecosystem benefits: Habitat restored, water cycle improved, carbon stored

**Case Study 2: Germany - Renewable Energy**

Problem: Energy production causes air pollution and climate change
Solution: Invested heavily in wind turbines and solar panels
Result: 50% of electricity from renewables (goal: 80% by 2030)
Community benefit: Cleaner air, jobs in renewable industry, lower energy bills

**Case Study 3: India - Community Water Harvesting**

Problem: Drought and water scarcity in rural areas
Solution: Communities built tanks to capture monsoon rainwater
Result: Local water availability increased, reduced need for wells, agriculture improved
Environmental benefit: Water table recovered, less groundwater depletion

**Case Study 4: Kenya - Marine Protected Areas**

Problem: Overfishing was destroying ocean ecosystems
Solution: Created areas where fishing is restricted, allowing fish populations to recover
Result: Fish populations rebounded, fishing communities have MORE fish to catch now
Ecosystem benefit: Ocean biodiversity restored, food security improved

**Case Study 5: Your Community - Local Recycling**

Problem: Landfills filling with trash, resources wasted
Solution: Community recycling programs, composting
Result: 40% of waste diverted from landfills, resources recovered for reuse
Benefit: Less mining needed, less pollution, cost savings

**What patterns do you see in successful conservation efforts?**`,
      choices: [
        { text: 'Successful solutions involve: community involvement, economic incentives, science-based approaches, long-term commitment, and seeing environmental protection as beneficial (not costly)', nextScene: 'humanEarthConclusion', isCorrect: true, feedback: 'EXCELLENT! You\'ve identified what makes conservation work. It\'s not just about sacrifice—it\'s about smart solutions that benefit everyone!' }
      ]
    },

    humanEarthConclusion: {
      module: 'human',
      standard: 'ALT 13',
      title: "✅ ALT 13 Complete: Communities Protect Earth!",
      text: `**What You've Discovered:**

Communities around the world are successfully protecting Earth's resources using SCIENCE-BASED APPROACHES:

**Key Success Factors:**

**1. Understanding the Problem**
- Scientists study what's happening
- Data guides decisions (not guesses)

**2. Involving the Community**
- People participate in solutions
- Education helps people understand why it matters

**3. Creating Economic Incentives**
- Make protection profitable (Costa Rica paying for forests)
- Create jobs in green industries (German renewables jobs)

**4. Using Science and Technology**
- Solar and wind power instead of fossil fuels
- Rainwater harvesting systems
- Protected areas based on ecosystem science

**5. Long-Term Commitment**
- Solutions take years or decades
- Persistence pays off

**Examples of Protection Strategies:**
✓ Recycling (conserve resources)
✓ Renewable energy (clean power)
✓ Reforestation (restore habitats)
✓ Protected areas (preserve ecosystems)
✓ Sustainable farming (maintain soil)
✓ Water conservation (protect freshwater)
✓ Pollution control (clean air/water)

**Why This Matters:**
- Protecting Earth protects human health
- Resources don't last forever
- Ecosystems support all life
- Future generations depend on our choices
- Science helps us make good decisions

**What you learned:**
✓ Real communities are solving environmental problems
✓ Science guides conservation decisions
✓ Economic and environmental goals can align
✓ Individual and community actions matter
✓ How to research and analyze effectiveness`,
      choices: [
        { text: 'Explore Engineering Design', nextScene: 'engineeringIntro', isCorrect: true },
        { text: 'Return to Module Selection', nextScene: 'moduleSelect', isCorrect: true }
      ]
    },

    // ===== ENGINEERING MODULE =====
    engineeringIntro: {
      module: 'engineering',
      title: "🛠️ Engineering Design Module",
      text: `Engineering is APPLIED SCIENCE. Engineers solve real problems by:
1. Defining the problem clearly
2. Generating possible solutions
3. Testing solutions
4. Improving designs based on testing

This isn't just building things—it's problem-solving with CONSTRAINTS (limited time, money, materials).

In this module, you'll:
- Define engineering problems (ALT 14)
- Generate and compare solutions (ALT 15)
- Test and improve prototypes (ALT 16)

Let's solve a real engineering problem...`,
      choices: [
        { text: 'Mission 1: Define an Engineering Problem (ALT 14)', nextScene: 'engineeringProblemMission', isCorrect: true },
        { text: 'Mission 2: Generate Solutions (ALT 15)', nextScene: 'engineeringSolutionsMission', isCorrect: true },
        { text: 'Mission 3: Test & Improve (ALT 16)', nextScene: 'engineeringTestMission', isCorrect: true },
        { text: 'Return to Module Selection', nextScene: 'moduleSelect', isCorrect: true }
      ]
    },

    engineeringProblemMission: {
      module: 'engineering',
      standard: 'ALT 14',
      title: "🎯 Mission 1: Define an Engineering Problem",
      subtitle: "Engineering Design - Design Problem",
      text: `Your school has a problem:

The playground gets slippery and unsafe during rain. Students slip and get hurt. The principal needs a SOLUTION that:
- Keeps the playground safe when wet
- Doesn't cost too much money
- Lasts a long time
- Doesn't damage the ground

This is an ENGINEERING PROBLEM—a real need with specific requirements and constraints.

**Your mission:** Define this problem clearly with CRITERIA (what makes a solution good) and CONSTRAINTS (limitations).`,
      choices: [
        { text: 'Create a problem statement with: What\'s wrong, what we need, success criteria, and constraints (cost, time, materials)', nextScene: 'engineeringProblemDefinition', isCorrect: true, feedback: 'Perfect! A clear problem definition is the first step in any engineering project. Let\'s build it out!' }
      ]
    },

    engineeringProblemDefinition: {
      module: 'engineering',
      standard: 'ALT 14',
      title: "📋 Problem Definition: Slippery Playground",
      text: `**THE PROBLEM:**
The playground is unsafe when wet because students slip and fall, causing injuries.

**WHAT WE NEED:**
A solution to make the playground safe for students to play on, even when it's wet.

**SUCCESS CRITERIA (What makes it work?):**
✓ Reduces slipping and falling significantly
✓ Safe for students to use (no sharp edges, toxic materials)
✓ Durable (lasts at least 2-3 years)
✓ Easy to maintain and clean
✓ Visually acceptable (looks okay)

**CONSTRAINTS (What are the limits?):**

Budget: Maximum $5,000 for the project
Time: Must be installed within one school year
Material: Must work with existing playground surface
Maintenance: School staff must be able to maintain it
Size: Can only cover the most-used areas

**THE CHALLENGE:**
Design a solution that meets ALL the success criteria WHILE RESPECTING ALL the constraints.

Example solutions to consider:
- Anti-slip paint coating
- Rubber safety mats
- Absorbent covering
- Drainage system
- Combination approach

**What solution would you propose?**`,
      choices: [
        { text: 'I\'ll move to Mission 2 to generate and evaluate multiple solution options', nextScene: 'engineeringSolutionsMission', isCorrect: true }
      ]
    },

    engineeringSolutionsMission: {
      module: 'engineering',
      standard: 'ALT 15',
      title: "💡 Mission 2: Generate & Compare Solutions",
      subtitle: "Engineering Design - Possible Solutions",
      text: `Good engineers don't just pick one idea. They GENERATE MULTIPLE SOLUTIONS and then compare them.

For your slippery playground problem, here are 4 different solutions. Let's compare them against your CRITERIA and CONSTRAINTS:

**Solution A: Anti-Slip Paint**
- Apply special coating to playground surface
- Dries quickly, available now
- Cost: $1,500
- Durability: 2 years
- Maintenance: Occasional cleaning
- Effectiveness: Good grip when wet

**Solution B: Rubber Safety Mats**
- Install interlocking rubber mats over high-slip areas
- Cushions falls + prevents slips
- Cost: $4,000
- Durability: 3-4 years
- Maintenance: Regular cleaning, potential replacement of damaged sections
- Effectiveness: Excellent grip, cushioned

**Solution C: Improved Drainage System**
- Install drain tiles under playground
- Removes water faster
- Cost: $3,500
- Durability: 5+ years (permanent)
- Maintenance: Occasional unclogging
- Effectiveness: Prevents water from pooling

**Solution D: Combination (Paint + Drainage)**
- Anti-slip paint + basic drainage
- Comprehensive approach
- Cost: $4,800
- Durability: 2-3 years for paint, 5+ for drainage
- Maintenance: Cleaning + occasional drain maintenance
- Effectiveness: Very effective, reduces both standing water and slipping

**How would you compare these solutions?**`,
      choices: [
        { text: 'Evaluate each solution against the success criteria. Which best meets the criteria while staying within budget and constraints?', nextScene: 'engineeringSolutionsEvaluation', isCorrect: true, feedback: 'Great! Let\'s analyze which solution is BEST for the real-world problem. This is how engineers make decisions.' }
      ]
    },

    engineeringSolutionsEvaluation: {
      module: 'engineering',
      standard: 'ALT 15',
      title: "📊 Comparing Solutions Against Criteria",
      text: `**Evaluation Matrix:**

(Rating: ⭐⭐⭐ = excellent, ⭐⭐ = good, ⭐ = poor)

**Solution A: Anti-Slip Paint**
- Reduces slipping: ⭐⭐ (helps, but not perfect)
- Safety: ⭐⭐⭐ (no fall cushioning though)
- Durability: ⭐ (only 2 years, needs repainting)
- Easy maintenance: ⭐⭐⭐
- Looks good: ⭐⭐⭐
- Cost: $1,500 (WELL under budget) ✓
- Overall: Good quick fix, but needs replacement soon

**Solution B: Rubber Mats**
- Reduces slipping: ⭐⭐⭐ (excellent grip)
- Safety: ⭐⭐⭐ (cushions falls too!)
- Durability: ⭐⭐⭐ (3-4 years)
- Easy maintenance: ⭐⭐ (needs regular cleaning, some replacement)
- Looks good: ⭐⭐ (functional but less aesthetic)
- Cost: $4,000 (within budget) ✓
- Overall: Most effective safety solution, good durability

**Solution C: Drainage System**
- Reduces slipping: ⭐⭐⭐ (prevents water)
- Safety: ⭐⭐ (doesn't cushion falls)
- Durability: ⭐⭐⭐⭐ (5+ years!)
- Easy maintenance: ⭐⭐⭐ (mostly hands-off)
- Looks good: ⭐⭐ (drains hidden)
- Cost: $3,500 (good value) ✓
- Overall: Longest-term solution, but requires upfront patience

**Solution D: Paint + Drainage (Combination)**
- Reduces slipping: ⭐⭐⭐⭐ (best of both)
- Safety: ⭐⭐⭐ (good grip + dry surface)
- Durability: ⭐⭐⭐ (mixed - paint needs refresh, drainage lasts)
- Easy maintenance: ⭐⭐ (requires ongoing care)
- Looks good: ⭐⭐⭐
- Cost: $4,800 (near budget max) ✓
- Overall: Most comprehensive, addresses problem from multiple angles

**RECOMMENDATION:**

**Best choice for the school: Solution B (Rubber Mats) OR Solution D (Combination)**

Why? Because they provide the most immediate safety improvement (preventing slips AND cushioning falls) while staying within budget. Solution D is more long-term but more comprehensive. Solution B is simpler and more focused on the immediate safety problem.

**What matters in engineering:**
✓ Clearly defining the problem
✓ Generating multiple solutions
✓ Comparing them fairly
✓ Making data-based decisions
✓ Choosing the BEST solution, not the cheapest

**What would YOU recommend and why?**`,
      choices: [
        { text: 'I\'d choose Solution D (Combination) because it addresses the problem now AND long-term', nextScene: 'engineeringTestMission', isCorrect: true },
        { text: 'I\'d choose Solution B (Rubber Mats) because they\'re safe, effective, and easiest to implement', nextScene: 'engineeringTestMission', isCorrect: true },
        { text: 'I\'d choose Solution C (Drainage) because it lasts longest and is most maintainable', nextScene: 'engineeringTestMission', isCorrect: true }
      ]
    },

    engineeringTestMission: {
      module: 'engineering',
      standard: 'ALT 16',
      title: "🧪 Mission 3: Test & Improve Your Solution",
      subtitle: "Engineering Design - Model Improvement",
      text: `In real engineering, you don't just build something and hope it works. You TEST it, find failure points, and IMPROVE it.

Let's say the school chose Solution D (Paint + Drainage). How would we test it before spending $4,800 and installing it on the real playground?

**Your challenge:** Design a FAIR TEST that shows whether your solution actually works and identifies problems to fix.`,
      choices: [
        { text: 'Create a small-scale test: Build a miniature playground with drainage and painted surface. Test with water. Measure slip resistance.', nextScene: 'engineeringTestDesign', isCorrect: true, feedback: 'Perfect! Testing at small scale first is smarter than risking the real playground. This is how engineers work!' }
      ]
    },

    engineeringTestDesign: {
      module: 'engineering',
      standard: 'ALT 16',
      title: "🔬 Design Your Engineering Test",
      text: `**Test Setup:**

Build a small-scale model:
- Small wooden platform (2 ft × 3 ft)
- Tilt it to match playground slope
- Apply the anti-slip paint to half
- Install simple drainage (PVC pipe under slight slope)
- Leave other half untreated for comparison

**Test Procedure:**

Test 1: Grip Test
- Pour water on painted surface
- Slide a shoe across it, measure sliding distance
- Do same on unpainted surface
- Compare: Painted should slide LESS

Test 2: Drainage Test
- Pour measured amount of water
- Time how long it takes to drain
- Should clear in under 2 minutes for safety

Test 3: Paint Durability
- Expose painted area to sun, rain, foot traffic for 2 weeks
- Check for peeling, fading, or damage
- Assess maintenance needed

Test 4: Safety for Fall
- Drop objects from height to test if paint creates hazards
- Test if paint is slippery when DRY (can't make it worse!)

**Your Results:**

Test 1 Results: Painted surface allows 6-inch slide, unpainted allows 24-inch slide
✓ Paint WORKS for grip

Test 2 Results: Water drains in 1.5 minutes
✓ Drainage WORKS

Test 3 Results: Paint shows slight fading after 2 weeks of sun, but no peeling
✓ Paint durable enough (will need occasional refresh)

Test 4 Results: Paint is NOT slippery when dry
✓ SAFE when dry

**Failure Points Found:** Paint needs sun protection; drainage needs leaf guards to prevent clogging

**What improvements would you make before installing on the real playground?**`,
      choices: [
        { text: 'Add UV-protective clear coat to paint for longer life. Install leaf guards on drainage outlets. Test with actual playground traffic patterns.', nextScene: 'engineeringConclusion', isCorrect: true, feedback: 'EXCELLENT! You\'ve identified problems and improvements. This is iterative engineering—test, find problems, improve, test again!' }
      ]
    },

    engineeringConclusion: {
      module: 'engineering',
      standard: 'ALT 16',
      title: "✅ ALT 14-16 Complete: Engineering Design Process!",
      text: `**What You've Discovered:**

Engineering isn't just about building things. It's a systematic process:

**Step 1: DEFINE THE PROBLEM (ALT 14)**
✓ Understand what's wrong
✓ Create success criteria
✓ Identify constraints (budget, time, materials)
✓ Be specific and measurable

**Step 2: GENERATE SOLUTIONS (ALT 15)**
✓ Create MULTIPLE possible approaches
✓ Don't just pick one idea
✓ Compare solutions fairly
✓ Make decisions based on data, not preference

**Step 3: TEST & IMPROVE (ALT 16)**
✓ Build a prototype or test model
✓ Run fair tests with controlled variables
✓ Find failure points
✓ Improve design based on results
✓ Repeat until it works well

**Why This Matters:**
- Testing prevents expensive mistakes
- Controlled variables show what actually works
- Failure points guide improvements
- Real engineering saves time, money, and resources
- This process solves problems in:
  - Bridge building
  - Medicine and devices
  - Technology
  - Environmental solutions
  - Anything humans build!

**The Scientific Method in Engineering:**
- Ask: What's the problem?
- Research: What solutions exist?
- Hypothesis: This solution should work because...
- Test: Build and test it
- Analyze: What worked? What failed?
- Improve: Make it better
- Communicate: Share the design

**What you learned:**
✓ How to define engineering problems clearly
✓ How to generate and compare solutions
✓ Why testing is essential
✓ How to find and fix failure points
✓ That failure is part of the process
✓ How engineering uses the scientific method

---

You've completed ALL modules and mastered how SCIENCE REALLY WORKS!`,
      choices: [
        { text: 'Review what I\'ve learned', nextScene: 'completionReview', isCorrect: true },
        { text: 'Return to Module Selection', nextScene: 'moduleSelect', isCorrect: true }
      ]
    },

    // ===== MODULE SELECT =====
    moduleSelect: {
      title: "🔬 Science Quest - Module Selection",
      subtitle: "Choose your scientific path",
      text: `You've completed modules! Choose what interests you next:

**Modules Available:**`,
      isModuleSelect: true
    },

    // ===== COMPLETION =====
    completionReview: {
      title: "🏆 You Are a Real Scientist!",
      text: `You've journeyed through six domains of science and mastered how real scientists think and work:

**✅ ALT 1-4: Matter & Properties**
- Matter is made of particles (too small to see)
- Weight is always conserved
- Materials have measurable properties
- Mixing can create new substances

**✅ ALT 5: Motion & Forces**
- Gravity always pulls downward
- Forces can be proven through evidence

**✅ ALT 6-8: Energy & Ecosystems**
- Energy from the sun powers all life
- Plants get growth material from air and water
- Matter cycles endlessly through ecosystems
- Systems are interconnected

**✅ ALT 9-12: Earth & Space**
- Star brightness depends on distance
- Earth's rotation and orbit explain sky patterns
- Earth's systems interact constantly
- Freshwater is precious and limited

**✅ ALT 13: Protecting Earth**
- Communities use science to protect resources
- Data guides conservation decisions

**✅ ALT 14-16: Engineering Design**
- Define problems with criteria and constraints
- Generate and compare multiple solutions
- Test, find failures, and improve

**Most importantly, you learned HOW SCIENCE WORKS:**
✓ Ask good questions
✓ Design fair experiments
✓ Control variables
✓ Collect data
✓ Analyze results
✓ Draw evidence-based conclusions
✓ Improve and iterate
✓ Communicate findings

This isn't just knowledge—it's a WAY OF THINKING that you can apply to any problem, anywhere!

**Real scientists do exactly what you just did.**
Engineers use this method.
Doctors use this method.
Environmentalists use this method.
Anyone solving problems uses this method.

---

You are ready to ask your own questions and explore the world like a true scientist.

The world needs people who think this way. Keep investigating, keep asking, and keep learning!`,
      isCompletion: true,
      choices: [
        { text: 'Start a new adventure', nextScene: 'start', isCorrect: true }
      ]
    }
  };

  const handleChoice = (choice) => {
    setShowFeedback(true);
    
    setTimeout(() => {
      if (choice.feedback) {
        setFeedback(choice.feedback);
      }
      
      setTimeout(() => {
        setCurrentScene(choice.nextScene);
        setGameState('playing');
        setShowFeedback(false);
        window.scrollTo(0, 0);
      }, choice.feedback ? 3000 : 800);
    }, 300);
  };

  const getScene = () => {
    if (gameState === 'start') return scenes.start;
    if (gameState === 'playing') return scenes[currentScene] || scenes.start;
    return scenes.start;
  };

  const scene = getScene();

  const renderModuleSelect = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(modules).map(([key, module]) => (
          <button
            key={key}
            onClick={() => {
              const sceneMap = {
                matter: 'matterIntro',
                motion: 'motionIntro',
                energy: 'energyIntro',
                earth: 'earthSpaceIntro',
                engineering: 'engineeringIntro',
                human: 'humanEarthMission'
              };
              setCurrentScene(sceneMap[key]);
              setGameState('playing');
              window.scrollTo(0, 0);
            }}
            className={`p-8 rounded-xl border-2 transition-all hover:shadow-xl bg-gradient-to-br ${module.color} bg-opacity-10 border-opacity-30 hover:border-opacity-100`}
          >
            <div className="text-5xl mb-4">{module.emoji}</div>
            <h3 className="text-2xl font-bold mb-2">{module.name}</h3>
            <p className="text-sm mb-4">{module.description}</p>
            <p className="text-xs font-mono">{module.standards.join(', ')}</p>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12">
        {gameState === 'start' && !scene.isModuleSelect && (
          <div className="mb-16 text-center">
            <div className="text-7xl mb-6 animate-bounce">🔬</div>
            <h1 className="text-5xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              {scene.title}
            </h1>
            {scene.subtitle && <p className="text-xl text-cyan-300 mb-2">{scene.subtitle}</p>}
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          </div>
        )}

        {gameState === 'playing' && (
          <div className="mb-12 text-center">
            <div className="text-5xl mb-4">{scene.emoji || '🔬'}</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{scene.title}</h2>
            {scene.subtitle && <p className="text-cyan-300 mb-2">{scene.subtitle}</p>}
            {scene.standard && <p className="text-sm font-mono text-cyan-400">{scene.standard}</p>}
          </div>
        )}

        {gameState === 'start' && !scene.isModuleSelect && (
          <div className="bg-gradient-to-br from-slate-800/40 to-blue-900/20 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-10 mb-10 shadow-2xl">
            <p className="text-lg leading-relaxed text-slate-100 mb-8 whitespace-pre-line">
              {scene.text}
            </p>
          </div>
        )}

        {gameState === 'playing' && scene.isModuleSelect && (
          <div className="mb-12">
            <p className="text-lg mb-8 text-slate-100">{scene.text}</p>
            {renderModuleSelect()}
          </div>
        )}

        {gameState === 'playing' && !scene.isModuleSelect && !scene.isCompletion && (
          <div className="bg-gradient-to-br from-slate-800/40 to-blue-900/20 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-10 mb-10 shadow-2xl">
            <p className="text-base md:text-lg leading-relaxed text-slate-100 mb-6 whitespace-pre-line">
              {scene.text}
            </p>

            {showFeedback && feedback && (
              <div className={`mb-8 p-6 rounded-lg border-2 flex gap-4 animate-in ${
                feedback.toLowerCase().includes('perfect') || feedback.toLowerCase().includes('excellent') || feedback.toLowerCase().includes('brilliant')
                  ? 'bg-emerald-900/40 border-emerald-500'
                  : 'bg-amber-900/40 border-amber-500'
              }`}>
                {feedback.toLowerCase().includes('perfect') || feedback.toLowerCase().includes('excellent') || feedback.toLowerCase().includes('brilliant') ? (
                  <CheckCircle className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-8 h-8 text-amber-400 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-bold mb-2 text-lg">Feedback</p>
                  <p className="text-sm leading-relaxed">{feedback}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {gameState === 'playing' && scene.isCompletion && (
          <div className="bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 backdrop-blur-xl border border-emerald-500/50 rounded-2xl p-12 mb-10 shadow-2xl text-center">
            <div className="text-7xl mb-6 animate-bounce">🏆</div>
            <p className="text-base md:text-lg leading-relaxed text-slate-100 whitespace-pre-line">
              {scene.text}
            </p>
          </div>
        )}

        {!showFeedback && scene.choices && (
          <div className="space-y-4">
            {scene.choices.map((choice, idx) => (
              <button
                key={idx}
                onClick={() => handleChoice(choice)}
                className="w-full text-left p-6 rounded-xl border-2 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 cursor-pointer border-slate-600 hover:shadow-lg hover:shadow-cyan-500/20 bg-slate-700/20 group text-base sm:text-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-100 group-hover:text-cyan-300">
                    {choice.text}
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                </div>
              </button>
            ))}
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-slate-700/50 text-center text-sm text-slate-400">
          <p className="mb-2">🔬 Science Quest Platform 🌍</p>
          <p>Oregon 5th Grade Science Standards (ALT 1-16)</p>
          <p className="mt-4 text-xs">Learning how real scientists think and work</p>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(ScienceQuestPlatform));
