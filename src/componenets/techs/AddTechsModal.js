import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techAction';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechsModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter firstName and lastName' });
    } else {
      addTech({
        firstName,
        lastName,
      });
      M.toast({ html: `${firstName} ${lastName} was added as tech` });
      //Clear the feilds
      setFirstName('');

      setLastName('');
    }
  };
  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technition</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close wave-effect blue  waves-light btn-flat'
        >
          Enter{' '}
        </a>
      </div>
    </div>
  );
};
AddTechsModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};
export default connect(null, { addTech })(AddTechsModal);
