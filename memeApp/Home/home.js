import React, {useEffect, useState, useRef, memo} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useTheme } from '../context/ThemeProvider';
import Post from './Post';
import Header from './Header';
import Footer from './Footer';


let DATA = [];
 
const Home = () => {  
    const {theme} = useTheme();
    const [isLoading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(true);
    const flatlist = useRef(null)

    const renderItem = (obj) => <Post {...(obj.item)} />

    const getMemes = async () => {
      try {
        const response = await fetch('https://meme-api.herokuapp.com/gimme/15');
        const json = await response.json();
        DATA = json.memes

        setLoading(false);
        setRefresh(!refresh);

      } catch(err) {
        console.log(err)
      }
    };
    
    useEffect( () => {
      getMemes();

    }, []);


    const scrollToTop = () => flatlist.current.scrollToOffset({offset: 0, animated: true})
    

    if(isLoading){
      return (
          <View style={styles.Loadcontainer}>
              <View style={{height: 120}}>
                <Header />
              </View>

              <View style={styles.loading}>
                <ActivityIndicator size="large" color={theme.bar.backgroundColor} />
              </View>
          </View>
      );
    }
    else {
      return (    
          <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
                <FlatList 
                  ref={flatlist}
                  data = {DATA}
                  renderItem = {renderItem}
                  keyExtractor = {item => item.postLink}
                  showsVerticalScrollIndicator = {false}
                  ListHeaderComponent = {<Header />}
                  ListFooterComponent = {<Footer load={getMemes} scroll={scrollToTop} />}
                  refreshing = {false}
                  onRefresh = {getMemes}
                  extraData = {refresh}
                />
          </View>
      );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    Loadcontainer: {
      flex: 1,
    },
    loading: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    
})

export default memo(Home);



