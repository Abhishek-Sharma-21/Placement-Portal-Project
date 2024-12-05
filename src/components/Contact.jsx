

const Contact = () => {
    return (
      <>
        <div className="flex flex-col items-center mt-28 mb-52 text-primary ">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg text-center">
            <h1 className="text-5xl font-bold mb-4">Reach Us</h1>
            <p className="flex items-center justify-center mb-2">
              <i className="fa-solid fa-phone mr-2"></i> +91 111 222 3333
            </p>
            <p className="flex items-center justify-center mb-2">
              <i className="fa-regular fa-envelope mr-2"></i>
              placementportal@gmail.com
            </p>
            <p className="flex items-center justify-center mb-2 leading-normal">
              <i className="fa-solid fa-map-location mr-2"></i>
              Pilibhit Bypass Rd, M.J.P Rohilkahand University, Bareilly, Uttar Pradesh 243006
            </p>
          </div>
        </div>
      </>
    );
  };
  
  export default Contact;
  