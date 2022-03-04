import {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import { useSelector } from "react-redux";


const Products = (props) => {
    const {route,navigation}=props;
    const { products } = useSelector((state) => state.products);
    useEffect(() => {
      
    }, [route.params.category]);


    console.log(route.params.category)
    return (
        <View>
            safdawsf
        </View>
    );
}

const styles = StyleSheet.create({})

export default Products;
