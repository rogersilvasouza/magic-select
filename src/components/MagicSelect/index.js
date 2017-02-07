import React, {Component, PropTypes} from 'react';
import Style                         from './index.css';

class MagicSelect extends Component {

    constructor(props) {

        console.log('1 - Constructor');

        super(props);

        console.dir(props);

        this.state = {
          items  : [],
          click  : false,
          select : 'Select'
        };

    };

    componentDidMount() {

        console.log('2 - componentDidMount');

        fetch('https://raw.githubusercontent.com/rogersilvasouza/react-magic-select/master/public/example.json', { method: "GET" }).then(response => {

            return response.json();

        }).then(json => {

            console.dir(json);

            this.setState({ items : json.data });

        }).catch(error => {

            console.log(error);

        });

    };

    componentWillUnmount() {

        console.log('3 - componentWillUnmount');

    };

    clickOnSelect = () => {

        console.log('5 - clickOnSelect');

        console.log('this is:', this);

        this.setState({
          click  : true,
          select : 'Selecione'
        });

        this.render();

    }

    componentWillUpdate() {

        console.log('6 - componentWillUpdate');

    }

    render () {

        console.log('4 - Render');

        const magicSelectRequired     = this.props.magicSelectRequired,
              magicSelectOutsideClass = this.props.outsideClass ? this.props.outsideClass : 'MagicSelect',
                                 data = this.state.items;

        /* Props */
        console.group('Props');
        console.log('required     : ' + magicSelectRequired);
        console.log('outsideClass : ' + magicSelectOutsideClass);
        console.groupEnd('Props');

        // let option = 'Select';
        //
        // if (teste === 1) {
        //
        //     option = <option value="teste">Select One of Four</option>;
        //
        // }

        return (

            <div className={Style.MagicSelect} >

              <select required={magicSelectRequired} className={magicSelectOutsideClass} onClick={this.clickOnSelect} >

                  <option value="" key={Style.MagicSelect + ':' + 0}>{this.state.select}</option>

                  {

                          data.map((data, key) => (

                              <option  value={data.value} key={Style.MagicSelect + ':' + (key + 1)}>{data.text}</option>

                          ))

                  }

              </select>

            </div>

        );

    };

}

MagicSelect.defaultProps = {
    magicSelectRequired : false,
};

MagicSelect.propTypes = {
    magicSelectRequired : PropTypes.oneOf([true, false]),
};

export default MagicSelect;
