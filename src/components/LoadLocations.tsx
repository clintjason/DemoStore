import { useQuery, gql } from '@apollo/client';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

interface Location {
  id: string;
  name: string;
  description: string;
  photo: string;
}

interface Data {
  locations: Location[]
}

const LoadLocations = () => {
  //const { loading, error, data } : {loading: boolean, error?: any, data?: Data } = useQuery<Data>(GET_DATA);
  const { loading, error, data } : {loading: boolean, error?: any, data?: Data }= useQuery(GET_LOCATIONS);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Access the data returned by the GraphQL query here and render your component accordingly

  return (
    <>
      {data?.locations.map(({ id, name, description, photo }) => (
        <div key={id}>
          <h3>{name}</h3>
          <img width="400" height="250" alt="location-reference" src={`${photo}`} />
          <br />
          <b>About this location:</b>
          <p>{description}</p>
          <br />
        </div>
      ))}
    </>
  );
};

export default LoadLocations;