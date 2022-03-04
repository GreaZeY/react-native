import {useEffect,useState} from 'react';
import {View,Text,Image} from 'react-native';
import { useSelector } from "react-redux";
import { styles } from "../../styles";

const Products = (props) => {
    const {route,navigation}=props;
    const [filteredProducts,setFilteredProducts] = useState([])
    const { products } = useSelector((state) => state.products);

    useEffect(() => {
      let fp = products.filter(product=>product.categoryid.includes(route.params.category))
      setFilteredProducts(fp)
    }, [route.params.category,products]);


    console.log(filteredProducts)
    return (
        <View style={styles.container}>
            {
        filteredProducts.map((product) => (
          <View style={styles.card} key={product.id}>
            <Image
              source={{ uri: product.productimage }}
              style={{ width: 100, height: 100 }}
            />
            <View>
            <Text style={{ textAlign: "center",fontSize:15,marginLeft:10 }}>{product.productname}</Text>
            
          </View>
          </View>
      

        ))
        
        }
        </View>
    );
}



export default Products;
