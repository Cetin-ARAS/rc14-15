import CardsStyle, { Card, MainContainer } from './Cards.style';

const Cards = ({ recipes }) => {
  return(

   <MainContainer wrap="wrap">

    {recipes.map(({recipe}, index)=>(
    
    <Card>
      <Header>{recipe.label}</Header>    
      <Image src={recipe.image || defaultImage} /> 
      <Button onClick={()=> navigate('detail', { state: recipe }) </Card>>View More</Button>

    </Card>
))}
  </MainContainer>;
  );
};

export default Cards;
