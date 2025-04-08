// App.jsx
import GoalList from './components/GoalList'

function App() {
  const goals = [
    { id: 1, title: "Learn React", description: "Complete 3 React tutorials", completed: false },
    { id: 2, title: "Workout", description: "Do 30 mins cardio", completed: true },
    { id: 3, title: "Read a Book", description: "Read 20 pages", completed: false },
  ];

  return (
    // App.jsx
<div className="min-h-screen flex flex-col items-center justify-start p-6 bg-white">

      <h1 className="text-3xl font-bold mb-6">🎯 Goal Tracker</h1>

      <GoalList goals={goals} />
    </div>
  );
}

export default App;
