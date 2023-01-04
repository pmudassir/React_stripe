import React from 'react'

const Success = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <img
        alt='logo'
        src='https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-shopping-bag-logo-template_467913-995.jpg?w=2000'
        style={{
          width: "10vw",
          height: "20vh"
        }}
      />
      <p
        style={{
          backgroundColor: "teal",
          color: "white",
          padding: "20px",
          borderRadius: "10px"
        }}
      >SUCCESSFUL</p>
      <p>Thanks for shopping with Fitzy</p>
    </div>
  )
}

export default Success