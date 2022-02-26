import React, { Component } from "react";

export default class RenderWithMap extends Component {
  arrProduct = [
    {
      id: 1,
      name: "Iphone",
      price: 1000,
      img: "https://picsum.photos/seed/picsum/200/300/",
    },
    {
      id: 2,
      name: "Samsung Galaxy X10",
      price: 2000,
      img: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 3,
      name: "Nokia P8",
      price: 3000,
      img: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 4,
      name: "Ipad Pro 11",
      price: 4000,
      img: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 5,
      name: "Macbook Pro M1X",
      price: 1000,
      img: "https://picsum.photos/seed/picsum/200/300",
    },
  ];
  renderProduct = () => {
    // let arrTagProduct = [];
    // for (let prod of this.arrProduct) {
    //   let obTrJSX = (
    //     <tr>
    //       <td>{prod.id}</td>
    //       <td>{prod.name}</td>
    //       <td>{prod.price}</td>
    //       <td>
    //         <img src={prod.img} width={200} height={100} alt="..." />
    //       </td>
    //     </tr>
    //   );
    //   arrTagProduct.push(obTrJSX);
    // }
    // return arrTagProduct;
    let arrTagJSX = this.arrProduct.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img src={product.img} width={50} alt="..." />
          </td>
        </tr>
      );
    });
    return arrTagJSX;
  };

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
      </div>
    );
  }
}
