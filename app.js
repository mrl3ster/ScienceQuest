const React = window.React;
const { useState } = React;

const ScienceQuestPlatform = () => {
  const [gameState, setGameState] = useState('start');
  const [currentScene, setCurrentScene] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const scenes = {
    start: {
      title: "🔬 Welcome to Science Quest",
      text: `You're about to become a real scientist!

In each mission, you'll:
✓ Investigate real-world mysteries
✓ Design experiments with controlled variables
✓ Collect and analyze data
✓ Draw conclusions from evidence

**Let's begin!**`,
      isIntro: true,
      choices: [
        { text: 'Start Matter Module', nextScene: 'matter1', feedback: 'Great choice!' },
        { text: 'Learn about the scientific method', nextScene: 'method', feedback: 'Excellent!' }
      ]
    },
    matter1: {
      title: "⚛️ Matter & Properties",
      text: `Mission 1: Are Particles Real?

You notice food coloring spreads throughout water even though you only added it in one spot.

**Your question:** What evidence suggests matter is made of invisible particles?

Think about:
- How far does food coloring spread?
- Can we separate salt from water?
- Does sugar disappear in water?`,
      choices: [
        { text: 'Test all three to see particle behavior', nextScene: 'results', feedback: 'Perfect! You\'ve identified testable observations.' },
        { text: 'Just look under a microscope', nextScene: 'results', feedback: 'Atoms are too small for regular microscopes! Let\'s gather evidence instead.' }
      ]
    },
    results: {
      title: "🔬 Results",
      text: `Your observations:
- Food coloring spreads = particles mixing
- Salt reappears when evaporated = particles still there
- Sugar spreads everywhere = particles dispersing

**Conclusion:** Matter is made of tiny particles too small to see!

You just proved atomic theory through observation!`,
      choices: [
        { text: 'Continue to next mission', nextScene: 'complete', feedback: 'You\'re ready!' }
      ]
    },
    method: {
      title: "⚗️ The Scientific Method",
      text: `Scientists follow these steps:

1. ASK a question
2. RESEARCH what\'s known
3. FORM a hypothesis
4. DESIGN an experiment
5. COLLECT data
6. ANALYZE results
7. DRAW conclusions
8. COMMUNICATE findings

Every mission uses this method!`,
      choices: [
        { text: 'Start a mission', nextScene: 'matter1', feedback: 'Let\'s go!' }
      ]
    },
    complete: {
      title: "🏆 Great Work!",
      text: `You just completed your first science mission!

You learned:
✓ How to ask good questions
✓ How to design fair tests
✓ How to analyze results
✓ How to draw conclusions

This is how REAL scientists think!

More missions coming soon...`,
      choices: [
        { text: 'Start over', nextScene: 'start', feedback: 'Welcome back!' }
      ]
    }
  };

  const handleChoice = (choice) => {
    setShowFeedback(true);
    setFeedback(choice.feedback);
    
    setTimeout(() => {
      setCurrentScene(choice.nextScene);
      setShowFeedback(false);
    }, 2000);
  };

  const scene = gameState === 'start' ? scenes.start : (scenes[currentScene] || scenes.start);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <div className="text-6xl mb-4">🔬</div>
          <h1 className="text-4xl font-bold mb-2 text-cyan-400">{scene.title}</h1>
        </div>

        <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-8 mb-8">
          <p className="text-lg leading-relaxed whitespace-pre-line">{scene.text}</p>

          {showFeedback && feedback && (
            <div className="mt-6 p-4 bg-green-900/50 border border-green-500 rounded text-green-200">
              {feedback}
            </div>
          )}
        </div>

        <div className="space-y-3">
          {scene.choices && scene.choices.map((choice, idx) => (
            <button
              key={idx}
              onClick={() => handleChoice(choice)}
              disabled={showFeedback}
              className="w-full p-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition disabled:opacity-50"
            >
              {choice.text} →
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(ScienceQuestPlatform));
