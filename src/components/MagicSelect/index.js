// import React, {Component, PropTypes} from 'react';
import React, {Component} from 'react';

class MagicSelect extends Component {

    constructor(props) {

        super(props);

        this.state = { items: [] };

        console.log('Construtor');

    }

    componentDidMount() {

        fetch('https://raw.githubusercontent.com/rogersilvasouza/react-magic-select/master/public/example.json', { method: "GET" })
        .then(response => {

          return response.json();

        }).then(json => {

          console.dir(json);
          this.setState({ items : json });

        }).catch(error => {

          console.log(error);

        });

    };

    componentWillUnmount() {

        console.log('Componente Finalizado');

    };

    render () {

        var data = [{
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
            }];

        return (
            <div className='MagicSelect'>
              <select>
                  {
                      data.map((data, key) => (
                          <option  value={data.value} key={'select:' + key}>{data.text}</option>
                      ))
                  }
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
