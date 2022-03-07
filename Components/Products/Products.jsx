import {useEffect,useState} from 'react';
import {View,Text,Image,TouchableHighlight,Button} from 'react-native';

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
          <TouchableHighlight style={styles.touchableStyle}  key={product.id} >
          
          <View style={styles.card} >
            <Image
              source={{ uri: product.productimage }}
              style={{ width: 100, height: 100 }}
            />
            <View style={{ width:'60%',marginLeft:10,alignSelf:'flex-start',marginTop:15 }} >
            <Text style={{ fontSize:15,fontWeight:500 }}>{product.productname}</Text>
            
              <View style={{flexDirection:'row'}} >
              <Text style={{ fontSize:12,marginTop:5 }}>Ideal for </Text>
                {
              product.industryid.map(ind=>(<Text key={ind} style={{ color: "springgreen",fontSize:12,fontWeight:500, marginTop:5}}>{ind} </Text>))
                }
            </View>
            
            <Text style={{ fontSize:12, marginTop:5}} >{product.description.length>70?product.description.slice(0,70)+'...':product.description}</Text>
            {/* <View style={{ flexDirection:'row' }}  >
            {product.platforms.map(item=> (
            <Image key={item} style={{ height: 23, width: 23,marginTop:3 }} source={require(`../../assets/${item}.png`)}/>
            ))
                    }
                    </View> */}
          </View>

        
           
                
          </View>

         

     
          </TouchableHighlight>
        ))
        
        }
        </View>
    );
}



export default Products;
