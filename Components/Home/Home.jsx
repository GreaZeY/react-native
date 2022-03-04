import { useSelector } from "react-redux";
import { Image, View, Text, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const styles = StyleSheet.create({
  catContainer: {
    display:'flex',
    flexDirection:'row',
    width:'100%',
    alignItems: 'center',
     marginBottom:20
  }
})


const Home = () => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <>
      {/* <Appbar style={{ backgroundColor: "#a6c76c" }}>
        <Appbar.Action icon="menu" onPress={() => console.log("menu")} />
        <Appbar.Content title="Categories" />
      </Appbar> */}
      
      <View style={{ alignItems: "center", marginTop: 50,padding:10 }}>
        
        {
        categories.map((category) => (
          
          <View
            key={category.id}
            style={styles.catContainer}
          >
            <Image
              source={{ uri: category.imgurl }}
              style={{ width: 100, height: 100 }}
            />
            <View>
            <Text style={{ textAlign: "center",fontSize:15,marginLeft:10 }}>{category.categoryname}</Text>
            
            {/* <Text style={{ textAlign: "center"}}>
              {category.description.length > 100?
                category.description.slice(0, 90) + "..."
                : 
                category.description}
            </Text> */}
          </View>
          </View>

        ))
        
        }

      </View>
    </>
  );
};

export default Home;
