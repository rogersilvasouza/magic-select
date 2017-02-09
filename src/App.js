import React, { Component } from 'react';
import './App.css';

import MagicSelect from './components/MagicSelect';

class App extends Component {

    render() {

        var data = {
          "data" :  [{
                      "value" : 1013,
                      "brief" : "MG",
                      "raw"   : "Minas Gerais"
                    },{
                      "value" : 1019,
                      "brief" : "RJ",
                      "raw"   : "Rio de Janeiro"
                    }]
        };


        return (

            <div className="App">

                <form>

                  <MagicSelect
                    required="false"
                    outsideClass="meu-formulario meu-select-small"
                    defaultOption={{ raw : 'Select', brief : 'Sel', value : 9892 }}
                    insertOptions={data}
                     />

                   {/*<input type="submit" value="send" />*/}

                </form>

            </div>

        );

    }

}

export default App;
