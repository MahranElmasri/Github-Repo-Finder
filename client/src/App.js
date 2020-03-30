import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./layout/Navbar";
import Spinner from "./layout/Spinner";
import Repos from "./components/Repos";
import Search from "./components/Search";
import Bookmarks from "./components/Bookmarks";
import Alert from "./layout/Alert";

function App({ searchvalue }) {
  const [repos, setRepo] = useState([]);
  let [loading, setLoading] = useState(false);
  let [alert, setAlertMsg] = useState(null);

  const seachvalue = async searchquery => {
    setLoading(true);
    const res = await axios.get(`/api/repos/search?q=${searchquery}`);
    setLoading(false);
    setRepo(res.data);
  };

  const clearRepos = () => {
    setRepo([]);
    setLoading = false;
  };

  const setAlert = alert => {
    setAlertMsg(alert);
    setTimeout(() => {
      setAlertMsg(null);
    }, 2000);
  };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  <Search
                    onSearchvalue={seachvalue}
                    clearRepos={clearRepos}
                    setAlert={setAlert}
                    showClearbtn={repos.length > 0 ? true : false}
                  />
                  {loading && <Spinner />}
                  <Repos repos={repos} />
                </Fragment>
              )}
            />
            <Route exact path="/bookmark" component={Bookmarks} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
