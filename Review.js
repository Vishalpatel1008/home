import React from 'react'
import { Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
import {useQuery} from '@apollo/client';
import {GET_RESTAURANTS} from '../queries/restaurant/restaurants';

export default function Review(){
    // const history = useHistory();
   const{id}= useParams()
   const {loading, error, data} =  useQuery(GET_RESTAURANTS, {
       variables:{ id : id }
    })
    // const [deleteRestaurant] = useMutation(DELETE_RESTAURANTS);
if(loading) return <p>Loading...</p>
if(error) return <p>Error:</p>

// const handleOnClick = ()=> {
//     deleteRestaurant({ variables: { id : id }   
// });

// history.push('/');
// window.location.reload();

// }

console.log(data);
return (
     <div class="p-3 container-fluid">
          <div className="site-header text-center mt-3 mb-3">
              <h1 class="fw-bold d-inline mr-2">Resturant View</h1>
              <Link class="align-center btn btn-primary rounded-pill btn-sm" to="/">List Data</Link>
            </div>
        <div class="card p-3">
        <h4 class="text-start ml-3 fw-bold text-primary">
                    {data.restaurant.name}
        </h4>
            <div class="row">
                <div class="fw-bold col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">Name :-</div>
                <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">{data.restaurant.name}</div>
            </div>
            <div class="row">
                <div class="fw-bold col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">Description :-</div>
                <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">{data.restaurant.description}</div>
            </div>
            {/* <button class="col-1 btn btn-danger" onClick={handleOnClick}>Delete</button> */}
        </div>
     </div>
 )

}
