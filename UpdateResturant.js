import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useQuery,useMutation } from "@apollo/client";
import { GET_RESTAURANTS, UPDATE_RESTAURANTS } from "../queries/restaurant/restaurants";
function UpdateResturant() {
    const{id}= useParams()
    const { loading, error, data } = useQuery(GET_RESTAURANTS, {
      variables: { id: id },
    });
    console.log(data);
  const [updateRestaurant] = useMutation(UPDATE_RESTAURANTS, {variables:{ id : id }});
  
  const history = useHistory();
  const [user, setUser] = useState({});
  // const [inputField , setInputField] = useState({
  //     name: '',
  //     description: '',
  // })
  useEffect(() => {
    setUser({ ...user, name: (data)?data.restaurant.name:'',description: (data)?data.restaurant.description:'' });
  },[loading]);

  function inputsHandler(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:</p>;
  function handleSubmit(e) {
    updateRestaurant({ variables: { ...user, id:id } });
    e.preventDefault();
alert("Data Successful Update");
    history.push("/");
    window.location.reload();
  }
console.log(id);
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
          <div className="site-header text-center mt-3 mb-3">
              <h1 class="fw-bold d-inline mr-2">Update Form</h1>
              <Link class="align-center btn btn-primary rounded-pill btn-sm" to="/">List Data</Link>
            </div>
            <div class="row flex justify-content-center">
              <div class="col-8 card p-3 mt-3">
                <form onSubmit={handleSubmit}>
                  <div>
                  <div class="fw-bold mb-2"> Name :-</div> 
                    <div class="mb-2">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      onChange={inputsHandler}
                     value={user.name}
                    />
                    </div>
                  </div>
                  <div>
                    <div class="fw-bold mb-2">Description :-</div>
                    <div class="mb-2">
                    <input
                      type="text"
                      class="form-control"
                      name="description"
                      onChange={inputsHandler}
                      value={user.description}
                    />
                    </div>
                  </div>
                  <div>
                    <button class="btn btn-primary">Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default UpdateResturant;
