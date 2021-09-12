import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Cscb, Project2, Project3, Project4 } from './pages/Projects';
import { AnimatePresence} from 'framer-motion';

const App = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const handleScrollToElement = (e) => {
      const url = window.location.origin + "/";

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after);
          }, 500);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, 500);
        }
      }

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push('cscb');
            }, 500);
          }
          break;
        case url + "cscb" : 
          wheelRouter('project-2', '');
          break;
        case url + "project-2" : 
          wheelRouter('project-3', 'cscb');
          break;
        case url + "project-3" : 
          wheelRouter('project-4', 'project-2');
          break;
        case url + "project-4" : 
          wheelRouter('contact', 'project-3');
          break;
        case url + "contact" : 
          if (e.wheelDeltaY > 0) {
            setTimeout(() => {
              history.push('project-4');
            }, 500);
          }
          break;
        default:
          console.log('nothing');
      }
    };

    window.addEventListener('wheel', handleScrollToElement)
  }, [history])

  return (
    <div>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/cscb" exact component={Cscb} />
          <Route path="/project-2" exact component={Project2} />
          <Route path="/project-3" exact component={Project3} />
          <Route path="/project-4" exact component={Project4} />
          <Route path="/contact" exact component={Contact} />
          <Redirect to="/" />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
