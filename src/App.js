import React, { Component } from 'react';
import './App.css';

import MagicSelect from './components/MagicSelect';

class App extends Component {

    render() {

        return (



            <div className="App">

                <form>

                  <MagicSelect
                    required="false"
                    outsideClass="meu-formulario meu-select-small"
                    defaultOption={{ raw : 'Select', brief : 'Sel', value : 9892 }}
                     />

                   {/*<input type="submit" value="send" />*/}

                </form>

            </div>

        );

    }

}

export default App;
