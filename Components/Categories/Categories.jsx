import { useSelector } from "react-redux";
import { Image, View, Text,TouchableHighlight } from "react-native";
import { styles } from "../../styles";


const Categories = ({navigation}) => {
  const { categories } = useSelector((state) => state.categories);


  return (
    
      <View style={styles.container}>
        
        {
        categories.map((category) => (
          <TouchableHighlight  key={category.id}
          style={styles.card}
          onPress={()=>navigation.navigate('Products',{category:category.categoryname})}>
          <>
            <Image
              source={{ uri: category.imgurl }}
              style={{ width: 100, height: 100 }}
            />
            <View>
            <Text style={{ textAlign: "center",fontSize:15,marginLeft:10 }}>{category.categoryname}</Text>
            
          </View>
          </>
          </TouchableHighlight>

        ))
        
        }

      </View>
 
  );
};

export default Categories;
