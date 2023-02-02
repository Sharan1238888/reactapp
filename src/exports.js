export const name="Sharan";
export const age=10; //inline export

export const Hello=()=>{
    return <h3>Arrow Function from Export.js page</h3>
}

const address = "Mangalore";
const phone_no = 1234567890
export {address,phone_no} // outerline export
  

// const pincode = 12345;
// export default pincode


const Hello2=()=>{
    return <h3>Arrow Function2 from Export.js page</h3>
}
export default Hello2



