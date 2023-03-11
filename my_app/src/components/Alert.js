import React from "react";
import PropTypes from 'prop-types';
import { ReactPropTypes } from "react";
export default function Alert(props) {
  return (
    props.showalert &&
    <>
       <div class={`alert alert-${props.showalert.type} alert-dismissible fade show`} role="alert">
        <strong></strong>{props.showalert.msg}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}
