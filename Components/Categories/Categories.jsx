import { useSelector } from "react-redux";
import { Image, View, Text, StyleSheet,SafeAreaView,TouchableHighlight } from "react-native";


const styles = StyleSheet.create({
  catContainer: {
    display:'flex',
    flexDirection:'row',
    width:'100%',
    alignItems: 'center',
    marginBottom:20,
 
  }
})


const Categories = ({navigation}) => {
  const { categories } = useSelector((state) => state.categories);


  return (
    <SafeAreaView>
           
      <View style={{ alignItems: "center", marginTop: 50,padding:10 }}>
        
        {
        categories.map((category) => (
          <TouchableHighlight  key={category.id}
          style={styles.catContainer}
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
    </SafeAreaView>
  );
};

export default Categories;
