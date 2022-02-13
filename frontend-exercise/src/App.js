import react from 'react';
import {NavRouter} from  './Components/Router/NavRouter';

import {BrowserRouter as Router,Route,Routes,Link,NavLink} from 'react-router-dom';
import Tasks from './Components/Task/Tasks';
import Folders from './Components/Folder/Folders';
import EditTask from './Components/Task/EditTask';
import FolderWithTasks from './Components/Folder/FolderWithTasks';

function App() {
  return (
    <Router>
      <NavRouter/>
      
      <Routes>
      <Route path="/" exact='true' element={<Tasks />}></Route>
      <Route path="/edit/:id" exact='true' element={<EditTask/>}>
      </Route>
      <Route path="/Folders/:id" exact='true' element={<FolderWithTasks />}></Route>
      <Route path="/Folders" element={<Folders />}></Route>
     
            
      </Routes>
    </Router>
  );
}

export default App;
