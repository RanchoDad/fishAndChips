import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { 
      // user ?
      //     <>
      //       <NavBar user={user} setUser={setUser} />
      //       <Routes>
      //         {/* Route components in here */}
      //         <Route path="/tasks" element={<UserTaskHistoryPage />} />
      //         <Route path="/" element={<HomePage />}/>
      //         <Route path="/newtasks" element={<NewTaskPage/>} />
      //         <Route path="/tasks/:taskId" element={<TaskDetailPage/>}/>
      //       </Routes>
      //     </>
      //     :
      //     <AuthPage setUser={setUser} />
      }
    </main>
  );
}
