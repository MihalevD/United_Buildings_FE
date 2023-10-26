import {
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
  } from 'react-admin';
  import { Location } from './filterHooks';
  import axios from 'axios';
  
  const customDataProvider = async (type: any, resource: any, params: any) => {
    switch (type) {
      case GET_LIST:
        // Implement data fetching for GET_LIST using params
        return fetchDataForGetList(resource, params);
      case GET_ONE:
        // Implement data fetching for GET_ONE
        return fetchDataForGetOne(resource, params);
      case GET_MANY:
        // Implement data fetching for GET_MANY
        return fetchDataForGetMany(resource, params);
      case GET_MANY_REFERENCE:
        // Implement data fetching for GET_MANY_REFERENCE
        return fetchDataForGetManyReference(resource, params);
      default:
        throw new Error(`Unsupported fetch type ${type}`);
    }
  };
  
  // Implement asynchronous data fetching functions
  async function fetchDataForGetList(resource: any, params: { pagination:{page: number; perPage: number;}, sort: { field: any; order: any; }; }) {
    try {
      // Construct the URL for your endpoint
      const url = `http://localhost:3000/locations`;

      console.log(params)
  
      // Make a GET request using axios
      const response = await axios.get(url, {
        params: {
          _start: (params.pagination.page - 1) * params.pagination.perPage,
          _end: params.pagination.page * params.pagination.perPage,
          _sort: params.sort.field,
          _order: params.sort.order,
          // You can add other filtering parameters here based on your requirements
        },
      });
  
      // Return the data from the response
      return {
        data: response.data,
        total: parseInt(response.headers['x-total-count'], 10), // Assuming the total count is provided in the response headers
      };
    } catch (error) {
      // Handle errors if the request fails
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  
  async function fetchDataForGetOne(resource: any, params: any) {
    // Implement data fetching for GET_ONE
  }
  
  async function fetchDataForGetMany(resource: any, params: any) {
    // Implement data fetching for GET_MANY
  }
  
  async function fetchDataForGetManyReference(resource: any, params: any) {
    // Implement data fetching for GET_MANY_REFERENCE
  }
  
  export default customDataProvider;
  