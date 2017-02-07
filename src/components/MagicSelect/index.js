import React, {Component, PropTypes} from 'react';
import Style                         from './index.css';

class MagicSelect extends Component {

    constructor(props) {

        console.log('1 - Constructor');

        super(props);

        this.state = {
          items  : [],
          focus  : false,
          select : 'Sel.'
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

    focusOnSelect = () => {

        console.log('5 - focusOnSelect');

        console.log('this is:', this);

        this.setState({
          focus  : true,
          select : 'Select'
        });

        this.render();

    }

    blurOnSelect = () => {

        console.log('6 - blurOnSelect');

        console.log('this is:', this);

        this.setState({
          focus  : false,
          select : 'Sel'
        });

        this.render();

    }

    componentWillUpdate() {

        console.log('7 - componentWillUpdate');

    }

    render () {

        console.log('4 - Render');

        console.log('State Focus ', this.state.focus);

        const magicSelectRequired     = this.props.magicSelectRequired,
              magicSelectOutsideClass = this.props.outsideClass ? this.props.outsideClass : 'MagicSelect',
                                 data = this.state.items;

        return (

            <div className={Style.MagicSelect} >

              <select required={magicSelectRequired} className={magicSelectOutsideClass} onFocus={this.focusOnSelect} onBlur={this.blurOnSelect} >

                  <option value="" key={Style.MagicSelect + ':' + 0}>{this.state.select}</option>

                  {

                          data.map((data, key) => (

                              <option  value={data.value} key={Style.MagicSelect + ':' + (key + 1)}>{ this.state.focus ? data.raw : data.brief }</option>

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
