import React from "react";
import { connect } from "react-redux";

import { getCart,deleteFromCart } from "../../ducks/productReducer";

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart();
  }
  render() {
    return (
      <div>
        {this.props.cart[0] ? (
          this.props.cart.map((val, i) => (
            <div key={i}>
              <h1>{val.name}</h1>
              <h3>{val.type}</h3>
              <p>{val.price}</p>
              <button onClick={this.props.deleteFromCart(i)}>DELETE</button>
            </div>
          ))
        ) : (
          <div>Nothing In Cart</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.productReducer });

export default connect(mapStateToProps, { getCart, deleteFromCart })(Cart);
