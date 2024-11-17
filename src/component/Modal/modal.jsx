import React from "react";

const modal = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* inut feild */}
          <div>
            <div className="card bg-base-100 shrink-0">
              <form className="" onSubmit={handleSubmit}>
                <div className="flex gap-8">

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      name="Fname"
                      type="text"
                      placeholder="First Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input
                      name="Lname"
                      type="text"
                      placeholder="Last Name"
                      className="input input-bordered"
                      required
                    />
                  </div>

                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Appoinment Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder=""
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="address"
                    placeholder="Your Address"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
          {/* input feid end */}

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default modal;
