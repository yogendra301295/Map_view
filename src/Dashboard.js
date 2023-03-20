import Cards from "./Components/Cards.js";
import { Container, Grid,} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react"; 
import Hero from './Components/Hero'
import useGetUsers from "./Hookes/useGetUsers.js";
import "./App.css";


const Dashboard = () => {   
  const { users } = useGetUsers();


  return (
    <> 
      <center>
        <Heading axis="both" m={10}>
          Checkout the cards
        </Heading>
      </center> 
      <Container maxW="80%" >
        <Grid className="Grid-res"    gap={3}> 
        {users?.map((user, index) => (
          <Cards userData={user} key={index} />
        ))} 
        </Grid>
      </Container>
      <Hero/>
    </>
  );
};

export default Dashboard;
