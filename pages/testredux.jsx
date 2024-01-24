//to get the data by using getDocs from firebase and use redux to fetch the data
import React from 'react';
import { getDocs,collection } from '@firebase/firestore';
import { db } from '@/functions/firebase';
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from 'react';
import {PostAdd,GetCurrentUser} from '../redux/productSlice'


import {SimpleGrid, Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup,Button } from '@chakra-ui/react'

// useSelector to fetch State from product management in redux
// useDispatch to excute the function from reducers in xxSlice.js product management in redux
const Test = () => {
    const dispatch = useDispatch();

    // useSelector write the state names in initialState

    // esta3de el state bil useSelector , esta3de el function bil import wil excute bil useDispatch
    const {products,currentuser} = useSelector((state) => state.products);
    
    const  getProducts= async () => {
        await getDocs(collection(db, "products")).then((querySnapshot) => {
          const results = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          })
          );
          console.log("resultsss",results)
          dispatch(PostAdd(results))
          
        });
      };
    
    useEffect(() =>
    {
        getProducts()
    }, []);

    
    console.log("resultRedux===>",products)
    
    return (
        <div>
          {currentuser.displayName}
      
{products.length}
<SimpleGrid columns={[1,1,2,3,4]} gap={15}>
{products.map((data,index)=>(

<Card key={index} maxW='sm'>
  <CardBody>
    <Image
      src={data.images}
      alt=''
      borderRadius='lg'
      height={300}
      width={400}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{data.title}</Heading>
      <Text>
        {data.desc}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $ {data.price} 
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

))}
</SimpleGrid>
            
        </div>
    );
}

export default Test;
