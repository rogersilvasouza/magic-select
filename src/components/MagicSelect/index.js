// import React, {Component, PropTypes} from 'react';
import React, {Component} from 'react';

class MagicSelect extends Component {

    constructor(props) {

        super(props);

        console.log('Construtor');

    }

    componentDidMount() {

        console.log('Componente Iniciado');

    };

    componentWillUnmount() {

        console.log('Componente Finalizado');

    };

    render () {

        let data = {
          data : [{
              value : 1001,
              text  : 'São Paulo'
            },{
              value : 1002,
              text  : 'Rio de Janeiro'
            },{
              value : 1003,
              text  : 'Santa Catarina'
            },{
              value : 1004,
              text  : 'Minas Gerais'
            }

          ]
        }

        console.dir(data);

        for (var k in data) {
          console.log(k, data[k]);
        }

        return (
            <div className='MagicSelect'>
              <select>
                <option value="sp">São Paulo</option>
              </select>
            </div>
        );

    }

}

// MagicSelect.propTypes = {
//     children : React.PropTypes.node.isRequired,
//     data     : React.PropTypes.object({
//         value  : React.PropTypes.string,
//         option : React.PropTypes.string,
//     }),
// };

export default MagicSelect;
