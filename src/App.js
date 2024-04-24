import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import TableListContainer from "./containers/TableListContainer";
import { AppContainerProvider } from "./contexts/AppContainer.context";
import NewContainer from "./containers/NewContainer";

const App = () => {
   return (
      <AppContainerProvider>
         <div>
           <NewContainer/>
            <TableListContainer />
         </div>
      </AppContainerProvider>
   );
};

export default App;
