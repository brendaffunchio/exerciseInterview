import react from 'react';
import {NavRouter} from  './Components/Router/NavRouter';

import {BrowserRouter as Router,Route,Routes,Link,NavLink} from 'react-router-dom';
import Tasks from './Components/Task/Tasks';
import Folders from './Components/Folder/Folders';
import EditTask from './Components/Task/EditTask';
import FolderWithTasks from './Components/Folder/FolderWithTasks';

function App() {
  return (
    <div class="container mt-5">
    <Router>
      <NavRouter/>
      
      <Routes>
      <Route exact='true' path="/" element={<Tasks />}></Route>
      <Route exact='true' path="/edit/:id" element={<EditTask/>}>
      </Route>
      <Route exact='true' path="/Folders/:id" element={<FolderWithTasks />}></Route>
      <Route path="/Folders" element={<Folders />}></Route>
     
            
      </Routes>
    </Router>
    </div>
  );
}

export default App;
