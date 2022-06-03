import PropTypes from 'prop-types';
import { Component } from 'react';
import { GrBasket } from 'react-icons/gr';
import { BiArrowBack } from 'react-icons/bi';
import s from './Contacts.module.css';

class Contacts extends Component {
  delEl = id => {
    this.props.findId(id);
  };

  render() {
    const { data } = this.props;
    return (
      <ul className={s.list}>
        {data.map(el => {
          const { name, id, number } = el;

          return (
            <li key={id} className={s.item}>
              <span>{name}</span>: <span>{number}</span>
              <button key={id} onClick={() => this.delEl(id)} className={s.btn}>
                <BiArrowBack className={s.arrow} />
                <GrBasket />
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

Contacts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
